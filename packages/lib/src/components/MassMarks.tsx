import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {MassMarksProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener} from '../hooks'

const MassMarks = ({
  id,
  data = [],
  opts = {},
  onClick,
  onComplete,
  onDoubleClick,
  onMouseDown,
  onMouseOut,
  onMouseUp,
  onTouchEnd,
  onTouchStart,
}: MassMarksProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevData, setPrevData] = useState('')
  const [prevOpts, setPrevOpts] = useState('')
  const [massMarks, setMassMarks] = useState<AMap.MassMarks | undefined>(
    undefined,
  )
  const [massMarksId] = useState(id ? id : `massMarks-${uuid()}`)

  const addMassMarks = (massMarks: AMap.MassMarks) =>
    dispatch({type: 'add_object', object: massMarks, id: massMarksId})
  const removeMassMarks = () =>
    dispatch({type: 'remove_object', id: massMarksId})

  useEffect(() => {
    if (state.map === undefined) return
    const massMarks = new AMap.MassMarks(data, {
      ...opts,
      style: opts.style
        ? Array.isArray(opts.style)
          ? opts.style.map(style => ({
              ...style,
              anchor: new AMap.Pixel(style.anchor.x, style.anchor.y),
              size: new AMap.Size(style.size.width, style.size.height),
            }))
          : {
              ...opts.style,
              anchor: new AMap.Pixel(opts.style.anchor.x, opts.style.anchor.y),
              size: new AMap.Size(
                opts.style.size.width,
                opts.style.size.height,
              ),
            }
        : {
            anchor: new AMap.Pixel(0, 0),
            size: new AMap.Size(30, 30),
            url: 'https://placehold.it/30x30',
          },
    })
    massMarks.setMap(state.map)
    if (opts.visible === undefined || opts.visible) massMarks.show()
    else massMarks.hide()
    setMassMarks(massMarks)
    setPrevData(JSON.stringify(data))
    setPrevOpts(JSON.stringify(opts))

    // Add the massMarks to state.objects
    addMassMarks(massMarks)

    // Remove the massMarks when the component is unmounted
    return () => removeMassMarks()
  }, [state.map])

  // Register AMap event listeners
  useAMapListener(massMarks, [
    {name: 'click', handler: onClick},
    {name: 'complete', handler: onComplete},
    {name: 'dblclick', handler: onDoubleClick},
    {name: 'mousedown', handler: onMouseDown},
    {name: 'mouseout', handler: onMouseOut},
    {name: 'mouseup', handler: onMouseUp},
    {name: 'touchend', handler: onTouchEnd},
    {name: 'touchstart', handler: onTouchStart},
  ])

  // Modify the AMap.MassMarks object when component props change
  useEffect(() => {
    if (massMarks === undefined) return
    if (data !== undefined && JSON.stringify(data) !== prevData) {
      massMarks.setData(data)
      setPrevData(JSON.stringify(data))
    }
    if (opts !== undefined && JSON.stringify(opts) !== prevOpts) {
      if (opts.style) {
        if (Array.isArray(opts.style))
          massMarks.setStyle(
            opts.style.map(style => ({
              ...style,
              anchor: new AMap.Pixel(style.anchor.x, style.anchor.y),
              size: new AMap.Size(style.size.width, style.size.height),
            })),
          )
        else
          massMarks.setStyle({
            ...opts.style,
            anchor: new AMap.Pixel(opts.style.anchor.x, opts.style.anchor.y),
            size: new AMap.Size(opts.style.size.width, opts.style.size.height),
          })
      }
      if (opts.visible === undefined || opts.visible) massMarks.show()
      else massMarks.hide()
      setPrevOpts(JSON.stringify(opts))
    }
  }, [massMarks, data, opts])

  return null
}

MassMarks.displayName = 'MassMarks'

export default MassMarks
