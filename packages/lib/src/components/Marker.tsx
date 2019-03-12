import React, {useContext, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import uuid from 'uuid/v1'
import {DEFAULT_MARKER_OPTIONS} from '../common/constants'
import {MarkerProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener} from '../hooks'

const Marker = ({
  children,
  id,
  opts = DEFAULT_MARKER_OPTIONS,
  onClick,
  onDoubleClick,
  onDragEnd,
  onDragging,
  onDragStart,
  onMouseDown,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  onMoveAlong,
  onMoveEnd,
  onMoving,
  onRightClick,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
}: MarkerProps): React.ReactPortal | null => {
  if (typeof document === 'undefined') return null
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [marker, setMarker] = useState<AMap.Marker | undefined>(undefined)
  const [markerId] = useState(id ? id : `marker-${uuid()}`)
  const [container] = useState(document.createElement('div'))

  const addMarker = (marker: AMap.Marker) =>
    dispatch({type: 'add_object', object: marker, id: markerId})

  const removeMarker = () => dispatch({type: 'remove_object', id: markerId})

  useEffect(() => {
    if (state.map === undefined) return
    const marker = new AMap.Marker({
      ...opts,
      map: state.map,
      content: !!children ? container : opts.content,
    })
    setMarker(marker)
    setPrevOpts(JSON.stringify(opts))

    // Add the marker to state.objects
    addMarker(marker)

    // Remove the marker when the component is unmounted
    return () => removeMarker()
  }, [state.map])

  // Register event listeners
  useAMapListener(marker, [
    {name: 'click', handler: onClick},
    {name: 'dblclick', handler: onDoubleClick},
    {name: 'dragend', handler: onDragEnd},
    {name: 'dragging', handler: onDragging},
    {name: 'dragstart', handler: onDragStart},
    {name: 'mousedown', handler: onMouseDown},
    {name: 'mousemove', handler: onMouseMove},
    {name: 'mouseout', handler: onMouseOut},
    {name: 'mouseover', handler: onMouseOver},
    {name: 'mouseup', handler: onMouseUp},
    {name: 'movealong', handler: onMoveAlong},
    {name: 'moveend', handler: onMoveEnd},
    {name: 'moving', handler: onMoving},
    {name: 'rightclick', handler: onRightClick},
    {name: 'touchend', handler: onTouchEnd},
    {name: 'touchmove', handler: onTouchMove},
    {name: 'touchstart', handler: onTouchStart},
  ])

  useEffect(() => {
    if (
      marker === undefined ||
      opts === undefined ||
      JSON.stringify(opts) === prevOpts
    )
      return
    opts.anchor && marker.setAnchor(opts.anchor)
    opts.angle && marker.setAngle(opts.angle)
    opts.clickable && marker.setClickable(opts.clickable)
    opts.content && marker.setContent(opts.content)
    opts.cursor && marker.setCursor(opts.cursor)
    opts.draggable && marker.setDraggable(opts.draggable)
    opts.extData && marker.setExtData(opts.extData)
    opts.icon && marker.setIcon(opts.icon)
    opts.label && marker.setLabel(opts.label)
    opts.offset && marker.setOffset(opts.offset)
    opts.position && marker.setPosition(opts.position)
    opts.raiseOnDrag && marker.setRaiseOnDrag(opts.raiseOnDrag)
    opts.shadow && marker.setShadow(opts.shadow)
    opts.shape && marker.setShape(opts.shape)
    opts.title && marker.setTitle(opts.title)
    opts.zIndex && marker.setzIndex(opts.zIndex)
    setPrevOpts(JSON.stringify(opts))
  }, [opts])

  return ReactDOM.createPortal(children, container)
}

Marker.displayName = 'Marker'

export default Marker
