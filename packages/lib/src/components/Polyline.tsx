import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {PolylineProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener, useMemoizedOptions} from '../hooks'

const Polyline = ({
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
}: PolylineProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [polyline, setPolyline] = useState<AMap.Polyline | undefined>(undefined)
  const [polylineId] = useState(id ? id : `polyline-${uuid()}`)

  const addPolyline = (polyline: AMap.Polyline) =>
    dispatch({type: 'add_object', object: polyline, id: polylineId})
  const removePolyline = () => dispatch({type: 'remove_object', id: polylineId})

  useEffect(() => {
    if (state.map === undefined) return
    const polyline = new AMap.Polyline({
      ...opts,
      map: state.map,
      path: opts.path
        ? opts.path.map(point => new AMap.LngLat(point.lng, point.lat))
        : undefined,
    })
    setPolyline(polyline)
    setPrevOpts(JSON.stringify(opts))

    // Add the polyline to state.objects
    addPolyline(polyline)

    // Remove the polyline when the component is unmounted
    return () => removePolyline()
  }, [state.map])

  // Register AMap event listeners
  useAMapListener(polyline, [
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

  // Modify the AMap.Polyline object when component props change
  useMemoizedOptions(polyline, opts, prevOpts, setPrevOpts)

  return null
}

Polyline.displayName = 'Polyline'

export default Polyline
