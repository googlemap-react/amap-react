import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {DEFAULT_RADIUS} from '../common/constants'
import {PlaceSearchProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapAPI, useAMapListener} from '../hooks'

const PlaceSearch = ({
  bounds,
  center,
  id,
  keyword,
  opts = {},
  radius,
  standalone = false,
  onComplete,
  onError,
  onListElementClick,
  onMarkerClick,
  onSelectChanged,
}: PlaceSearchProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [placeSearch, setPlaceSearch] = useState<AMap.PlaceSearch | undefined>(
    undefined,
  )
  const [placeSearchId] = useState(id ? id : `place-search-${uuid()}`)

  const addSearch = (search: AMap.PlaceSearch) =>
    dispatch({type: 'add_object', object: search, id: placeSearchId})
  const removeSearch = () =>
    dispatch({type: 'remove_object', id: placeSearchId})

  const loaded = useAMapAPI(state.apiKey)

  // Create AMap.PlaceSearch
  useEffect(() => {
    if (!loaded) return

    AMap.plugin(['AMap.PlaceSearch'], () => {
      const placeSearch = new AMap.PlaceSearch(
        state.map && !standalone ? {...opts, map: state.map} : opts,
      )
      setPlaceSearch(placeSearch)
      setPrevOpts(JSON.stringify(opts))
      addSearch(placeSearch)
    })

    return () => removeSearch()
  }, [loaded])

  // Register google map event listeners
  useAMapListener(placeSearch, [
    {name: 'complete', handler: onComplete},
    {name: 'error', handler: onError},
    {name: 'listElementClick', handler: onListElementClick},
    {name: 'markerClick', handler: onMarkerClick},
    {name: 'selectChanged', handler: onSelectChanged},
  ])

  useEffect(() => {
    if (placeSearch === undefined || keyword === undefined || keyword === '')
      return
    if (center !== undefined)
      placeSearch.searchNearBy(
        keyword,
        new AMap.LngLat(center.lng, center.lat),
        radius ? radius : DEFAULT_RADIUS,
        () => {},
      )
    else if (bounds !== undefined)
      placeSearch.searchInBounds(
        keyword,
        new AMap.Bounds(
          new AMap.LngLat(bounds.southWest.lng, bounds.southWest.lat),
          new AMap.LngLat(bounds.northEast.lng, bounds.northEast.lat),
        ),
        () => {},
      )
    else placeSearch.search(keyword, () => {})
    placeSearch.setPageIndex(1)
  }, [placeSearch, keyword, center, radius, bounds])

  //Modify the AMap.AutoComplete object when component props change
  useEffect(() => {
    if (
      placeSearch === undefined ||
      opts === undefined ||
      JSON.stringify(opts) === prevOpts
    )
      return

    const {city, citylimit, lang, pageIndex, pageSize, type} = opts
    city && placeSearch.setCity(city)
    if (citylimit !== undefined) placeSearch.setCityLimit(citylimit)
    lang && placeSearch.setLang(lang)
    pageIndex && placeSearch.setPageIndex(pageIndex)
    pageSize && placeSearch.setPageSize(pageSize)
    type && placeSearch.setType(type)
  }, [placeSearch, opts])

  return null
}

PlaceSearch.displayName = 'PlaceSearch'

export default PlaceSearch
