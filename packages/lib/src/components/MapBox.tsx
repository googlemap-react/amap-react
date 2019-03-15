import React, {useEffect, useContext, useState} from 'react'
import uuid from 'uuid/v1'
import {MapBoxProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapAPI, useAMapListener} from '../hooks'

const MapBox = ({
  className,
  opts = {},
  style,
  LoadedComponent,
  LoadingComponent = 'Loading...',
  onClick,
  onComplete,
  onDoubleClick,
  onDragEnd,
  onDragging,
  onDragStart,
  onHotSpotClick,
  onHotSpotOut,
  onHotSpotOver,
  onMapMove,
  onMouseDown,
  onMouseEnd,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseStart,
  onMouseUp,
  onMouseWheel,
  onMoveEnd,
  onMoveStart,
  onResize,
  onRightClick,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
  onZoomChange,
  onZoomEnd,
  onZoomStart,
}: MapBoxProps) => {
  // Get access to the AMap context
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [map, setMap] = useState<AMap.Map | undefined>(undefined)

  // Generate a random id for the DOM node where AMap.Map will be inserted
  const [mapItemId] = useState(`map-${uuid()}`)

  // Define action dispatchers
  const initMap = (map: AMap.Map) => dispatch({type: 'init_map', map: map})
  const reset = () => dispatch({type: 'reset'})

  const loaded = useAMapAPI(state.apiKey)

  // Load AMap
  useEffect(() => {
    if (!loaded) return
    const map = new AMap.Map(
      document.getElementById(mapItemId) as HTMLDivElement,
      {
        ...opts,
        center: opts.center
          ? new AMap.LngLat(
              opts.center.lng,
              opts.center.lat,
              opts.center.noAutoFix,
            )
          : undefined,
      },
    )
    setMap(map)
    setPrevOpts(JSON.stringify(opts))
    initMap(map)
    return () => reset()
  }, [loaded])

  // Register event listeners
  useAMapListener(map, [
    {name: 'click', handler: onClick},
    {name: 'complete', handler: onComplete},
    {name: 'dblclick', handler: onDoubleClick},
    {name: 'dragend', handler: onDragEnd},
    {name: 'dragging', handler: onDragging},
    {name: 'dragstart', handler: onDragStart},
    {name: 'hotspotclick', handler: onHotSpotClick},
    {name: 'hotspotout', handler: onHotSpotOut},
    {name: 'hotspotover', handler: onHotSpotOver},
    {name: 'mapmove', handler: onMapMove},
    {name: 'mousedown', handler: onMouseDown},
    {name: 'mouseend', handler: onMouseEnd},
    {name: 'mousemove', handler: onMouseMove},
    {name: 'mousestart', handler: onMouseStart},
    {name: 'mouseout', handler: onMouseOut},
    {name: 'mouseover', handler: onMouseOver},
    {name: 'mouseup', handler: onMouseUp},
    {name: 'mousewheel', handler: onMouseWheel},
    {name: 'moveend', handler: onMoveEnd},
    {name: 'movestart', handler: onMoveStart},
    {name: 'resize', handler: onResize},
    {name: 'rightclick', handler: onRightClick},
    {name: 'touchend', handler: onTouchEnd},
    {name: 'touchmove', handler: onTouchMove},
    {name: 'touchstart', handler: onTouchStart},
    {name: 'zoomchange', handler: onZoomChange},
    {name: 'zoomend', handler: onZoomEnd},
    {name: 'zoomstart', handler: onZoomStart},
  ])

  useEffect(() => {
    if (
      map === undefined ||
      opts === undefined ||
      JSON.stringify(opts) === prevOpts
    )
      return
    opts.center &&
      map.setCenter(
        new AMap.LngLat(
          opts.center.lng,
          opts.center.lat,
          opts.center.noAutoFix,
        ),
      )
    opts.features && map.setFeatures(opts.features)
    opts.labelzIndex && map.setLabelzIndex(opts.labelzIndex)
    opts.lang && map.setLang(opts.lang)
    opts.layers && map.setLayers(opts.layers)
    opts.mapStyle && map.setMapStyle(opts.mapStyle)
    opts.pitch && map.setPitch(opts.pitch)
    opts.rotation && map.setRotation(opts.rotation)
    opts.zoom && map.setZoom(opts.zoom)
    setPrevOpts(JSON.stringify(opts))
  }, [opts])

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
