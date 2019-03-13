import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {RectangleProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener, useMemoizedOptions} from '../hooks'

const Rectangle = ({
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
}: RectangleProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [rectangle, setRectangle] = useState<AMap.Rectangle | undefined>(
    undefined,
  )
  const [rectangleId] = useState(id ? id : `rectangle-${uuid()}`)

  const addRectangle = (rectangle: AMap.Rectangle) =>
    dispatch({type: 'add_object', object: rectangle, id: rectangleId})
  const removeRectangle = () =>
    dispatch({type: 'remove_object', id: rectangleId})

  useEffect(() => {
    if (state.map === undefined) return
    const rectangle = new AMap.Rectangle({
      ...opts,
      map: state.map,
      bounds: opts.bounds
        ? new AMap.Bounds(
            new AMap.LngLat(
              opts.bounds.southWest.lng,
              opts.bounds.southWest.lat,
              opts.bounds.southWest.noAutoFix,
            ),
            new AMap.LngLat(
              opts.bounds.northEast.lng,
              opts.bounds.northEast.lat,
              opts.bounds.northEast.noAutoFix,
            ),
          )
        : undefined,
    })
    setRectangle(rectangle)
    setPrevOpts(JSON.stringify(opts))

    // Add the rectangle to state.objects
    addRectangle(rectangle)

    // Remove the rectangle when the component is unmounted
    return () => removeRectangle()
  }, [state.map])

  // Register AMap event listeners
  useAMapListener(rectangle, [
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

  // Modify the AMap.Rectangle object when component props change
  useMemoizedOptions(rectangle, opts, prevOpts, setPrevOpts)

  return null
}

Rectangle.displayName = 'Rectangle'

export default Rectangle
