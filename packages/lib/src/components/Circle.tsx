import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {CircleProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener, useMemoizedOptions} from '../hooks'

const Circle = ({
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
}: CircleProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [circle, setCircle] = useState<AMap.Circle | undefined>(undefined)
  const [circleId] = useState(id ? id : `circle-${uuid()}`)

  const addCircle = (circle: AMap.Circle) =>
    dispatch({type: 'add_object', object: circle, id: circleId})
  const removeCircle = () => dispatch({type: 'remove_object', id: circleId})

  useEffect(() => {
    if (state.map === undefined) return
    const circle = new AMap.Circle({
      ...opts,
      map: state.map,
      center: opts.center
        ? new AMap.LngLat(
            opts.center.lng,
            opts.center.lat,
            opts.center.noAutoFix,
          )
        : undefined,
    })
    setCircle(circle)
    setPrevOpts(JSON.stringify(opts))

    // Add the circle to state.objects
    addCircle(circle)

    // Remove the circle when the component is unmounted
    return () => removeCircle()
  }, [state.map])

  // Register AMap event listeners
  useAMapListener(circle, [
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

  // Modify the AMap.Circle object when component props change
  useMemoizedOptions(circle, opts, prevOpts, setPrevOpts, 'circle')

  return null
}

Circle.displayName = 'Circle'

export default Circle
