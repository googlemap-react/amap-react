import React, {useEffect, useContext, useState} from 'react'
import uuid from 'uuid/v1'
import {MapBoxProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapAPI} from '../hooks'

const MapBox = ({
  apiKey,
  className,
  opts,
  style,
  LoadedComponent,
  LoadingComponent,
}: MapBoxProps) => {
  // Get access to the AMap context
  const {dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [map, setMap] = useState<AMap.Map | undefined>(undefined)

  // Generate a random id for the DOM node where AMap.Map will be inserted
  const [mapItemId] = useState(`map-${uuid()}`)

  // Define action dispatchers
  const initMap = (map: AMap.Map) => dispatch({type: 'init_map', map: map})
  const reset = () => dispatch({type: 'reset'})

  const loaded = useAMapAPI({
    apiKey: apiKey,
  })

  // Load Google Map
  useEffect(() => {
    if (!loaded) return
    const map = new AMap.Map(
      document.getElementById(mapItemId) as HTMLDivElement,
      opts,
    )
    setMap(map)
    setPrevOpts(JSON.stringify(opts))
    initMap(map)
    return () => reset()
  }, [loaded])

  // Render <MapBox>
  return (
    <>
      {loaded ? LoadedComponent : LoadingComponent}
      {typeof document !== 'undefined' ? (
        <div id={mapItemId} style={style} className={className} />
      ) : null}
    </>
  )
}

MapBox.displayName = 'MapBox'

export default MapBox
