import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {DrivingProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapAPI, useAMapListener} from '../hooks'

const Driving = ({
  destination,
  id,
  opts = {},
  origin,
  points = [],
  standalone = false,
  wayPoints = [],
  onComplete,
  onError,
}: DrivingProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [driving, setDriving] = useState<AMap.Driving | undefined>(undefined)
  const [drivingId] = useState(id ? id : `driving-${uuid()}`)

  const addSearch = (search: AMap.Driving) =>
    dispatch({type: 'add_object', object: search, id: drivingId})
  const removeSearch = () => dispatch({type: 'remove_object', id: drivingId})

  const loaded = useAMapAPI(state.apiKey)

  // Create AMap.Driving
  useEffect(() => {
    if (!loaded) return

    AMap.plugin(['AMap.Driving'], () => {
      const driving = new AMap.Driving(
        state.map && !standalone ? {...opts, map: state.map} : opts,
      )
      setDriving(driving)
      setPrevOpts(JSON.stringify(opts))
      addSearch(driving)
    })

    return () => removeSearch()
  }, [loaded])

  // Register google map event listeners
  useAMapListener(driving, [
    {name: 'complete', handler: onComplete},
    {name: 'error', handler: onError},
  ])

  useEffect(() => {
    if (
      driving === undefined ||
      ((origin === undefined || destination === undefined) &&
        points.length === 0)
    )
      return

    if (origin !== undefined && destination !== undefined)
      driving.search(
        new AMap.LngLat(origin.lng, origin.lat),
        new AMap.LngLat(destination.lng, destination.lat),
        {
          waypoints: wayPoints.map(
            wayPoint => new AMap.LngLat(wayPoint.lng, wayPoint.lat),
          ),
        },
        () => {},
      )
    else driving.search(points, () => {})
  }, [driving, origin, destination, wayPoints, points])

  //Modify the AMap.AutoComplete object when component props change
  useEffect(() => {
    if (
      driving === undefined ||
      opts === undefined ||
      JSON.stringify(opts) === prevOpts
    )
      return

    const {policy, province, number} = opts
    policy && driving.setPolicy(policy)
    province && number && driving.setProvinceAndNumber(province, number)
  }, [driving, opts])

  return null
}

Driving.displayName = 'Driving'

export default Driving
