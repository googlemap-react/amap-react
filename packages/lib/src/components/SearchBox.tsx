import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {useAMapAPI, useAMapListener} from '../hooks'
import {SearchBoxProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'

const SearchBox = ({
  id,
  className,
  style,
  opts = {},
  onChange,
  onChoose,
  onComplete,
  onError,
  onSelect,
}: SearchBoxProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [searchBox, setSearchBox] = useState<AMap.Autocomplete | undefined>(
    undefined,
  )
  const [searchBoxId] = useState(id ? id : `search-box-${uuid()}`)

  const addSearch = (search: AMap.Autocomplete) =>
    dispatch({type: 'add_object', object: search, id: searchBoxId})
  const removeSearch = () => dispatch({type: 'remove_object', id: searchBoxId})

  const loaded = useAMapAPI(state.apiKey)

  // Create AMap.AutoComplete
  useEffect(() => {
    if (!loaded) return
    let inputNode: HTMLInputElement
    if (!opts.input)
      inputNode = document.getElementById(searchBoxId) as HTMLInputElement
    else if (typeof opts.input === 'string')
      inputNode = document.getElementById(opts.input) as HTMLInputElement
    else inputNode = opts.input

    AMap.plugin(['AMap.Autocomplete'], () => {
      const searchBox = new AMap.Autocomplete({
        ...opts,
        input: inputNode,
      })
      setSearchBox(searchBox)
      setPrevOpts(JSON.stringify(opts))
      addSearch(searchBox)
    })

    return () => removeSearch()
  }, [loaded])

  // Register google map event listeners
  useAMapListener(searchBox, [
    {name: 'choose', handler: onChoose},
    {name: 'complete', handler: onComplete},
    {name: 'error', handler: onError},
    {name: 'select', handler: onSelect},
  ])

  // Modify the AMap.AutoComplete object when component props change
  useEffect(() => {
    if (
      searchBox === undefined ||
      opts === undefined ||
      JSON.stringify(opts) === prevOpts
    )
      return

    const {city, citylimit, type} = opts
    city && searchBox.setCity(city)
    if (citylimit !== undefined) searchBox.setCityLimit(citylimit)
    type && searchBox.setType(type)
  }, [searchBox, opts])

  return opts.input ? null : (
    <input
      id={searchBoxId}
      className={className}
      style={style}
      onChange={onChange}
    />
  )
}

SearchBox.displayName = 'SearchBox'

export default SearchBox
