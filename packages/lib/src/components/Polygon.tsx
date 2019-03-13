import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {PolygonProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener, useMemoizedOptions} from '../hooks'

const Polygon = ({
  id,
  opts = {},
  onChange,
  onClick,
  onDoubleClick,
  onHide,
  onMouseDown,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  onRightClick,
  onShow,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
}: PolygonProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [polygon, setPolygon] = useState<AMap.Polygon | undefined>(undefined)
  const [polygonId] = useState(id ? id : `polygon-${uuid()}`)

  const addPolygon = (polygon: AMap.Polygon) =>
    dispatch({type: 'add_object', object: polygon, id: polygonId})
  const removePolygon = () => dispatch({type: 'remove_object', id: polygonId})

  useEffect(() => {
    if (state.map === undefined) return
    const polygon = new AMap.Polygon({
      ...opts,
      map: state.map,
      path: opts.path
        ? opts.path.map(point => new AMap.LngLat(point.lng, point.lat))
        : opts.pathWithHole
        ? opts.pathWithHole.map(path =>
            path.map(point => new AMap.LngLat(point.lng, point.lat)),
          )
        : undefined,
    })
    setPolygon(polygon)
    setPrevOpts(JSON.stringify(opts))

    // Add the polygon to state.objects
    addPolygon(polygon)

    // Remove the polygon when the component is unmounted
    return () => removePolygon()
  }, [state.map])

  // Register AMap event listeners
  useAMapListener(polygon, [
    {name: 'change', handler: onChange},
    {name: 'click', handler: onClick},
    {name: 'dblclick', handler: onDoubleClick},
    {name: 'hide', handler: onHide},
    {name: 'mousedown', handler: onMouseDown},
    {name: 'mouseout', handler: onMouseOut},
    {name: 'mouseover', handler: onMouseOver},
    {name: 'mouseup', handler: onMouseUp},
    {name: 'rightclick', handler: onRightClick},
    {name: 'show', handler: onShow},
    {name: 'touchend', handler: onTouchEnd},
    {name: 'touchmove', handler: onTouchMove},
    {name: 'touchstart', handler: onTouchStart},
  ])

  // // Modify the AMap.Polygon object when component props change
  useMemoizedOptions(polygon, opts, prevOpts, setPrevOpts)

  return null
}

Polygon.displayName = 'Polygon'

export default Polygon
