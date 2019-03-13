import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {BezierCurveProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener, useMemoizedOptions} from '../hooks'

const BezierCurve = ({
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
}: BezierCurveProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [bezierCurve, setBezierCurve] = useState<AMap.BezierCurve | undefined>(
    undefined,
  )
  const [bezierCurveId] = useState(id ? id : `bezierCurve-${uuid()}`)

  const addBezierCurve = (bezierCurve: AMap.BezierCurve) =>
    dispatch({type: 'add_object', object: bezierCurve, id: bezierCurveId})
  const removeBezierCurve = () =>
    dispatch({type: 'remove_object', id: bezierCurveId})

  useEffect(() => {
    if (state.map === undefined) return
    const bezierCurve = new AMap.BezierCurve({
      ...opts,
      map: state.map,
    })
    setBezierCurve(bezierCurve)
    setPrevOpts(JSON.stringify(opts))

    // Add the bezierCurve to state.objects
    addBezierCurve(bezierCurve)

    // Remove the bezierCurve when the component is unmounted
    return () => removeBezierCurve()
  }, [state.map])

  // Register AMap event listeners
  useAMapListener(bezierCurve, [
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

  // Modify the AMap.BezierCurve object when component props change
  useMemoizedOptions(bezierCurve, opts, prevOpts, setPrevOpts, 'bezier-curve')

  return null
}

BezierCurve.displayName = 'BezierCurve'

export default BezierCurve
