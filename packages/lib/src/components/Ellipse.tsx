import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {EllipseProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener, useMemoizedOptions} from '../hooks'

const Ellipse = ({
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
}: EllipseProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [ellipse, setEllipse] = useState<AMap.Ellipse | undefined>(undefined)
  const [ellipseId] = useState(id ? id : `ellipse-${uuid()}`)

  const addEllipse = (ellipse: AMap.Ellipse) =>
    dispatch({type: 'add_object', object: ellipse, id: ellipseId})
  const removeEllipse = () => dispatch({type: 'remove_object', id: ellipseId})

  useEffect(() => {
    if (state.map === undefined) return
    const ellipse = new AMap.Ellipse({
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
    setEllipse(ellipse)
    setPrevOpts(JSON.stringify(opts))

    // Add the ellipse to state.objects
    addEllipse(ellipse)

    // Remove the ellipse when the component is unmounted
    return () => removeEllipse()
  }, [state.map])

  // Register AMap event listeners
  useAMapListener(ellipse, [
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

  // Modify the AMap.Ellipse object when component props change
  useMemoizedOptions(ellipse, opts, prevOpts, setPrevOpts)

  return null
}

Ellipse.displayName = 'Ellipse'

export default Ellipse
