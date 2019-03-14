import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {MassMarksProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener} from '../hooks'

const MassMarks = ({
  id,
  opts = {data: []},
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
    const {data, style, visible, ...otherOpts} = opts
    const massMarks = new AMap.MassMarks(
      data.map(point => ({
        ...point,
        lnglat: [point.lng, point.lat],
      })),
      {
        ...otherOpts,
        style: style
          ? Array.isArray(style)
            ? style.map(style => ({
                ...style,
                anchor: new AMap.Pixel(style.anchor.x, style.anchor.y),
                size: new AMap.Size(style.size.width, style.size.height),
              }))
            : {
                ...style,
                anchor: new AMap.Pixel(style.anchor.x, style.anchor.y),
                size: new AMap.Size(style.size.width, style.size.height),
              }
          : {
              anchor: new AMap.Pixel(0, 0),
              size: new AMap.Size(30, 30),
              url: 'https://placehold.it/30x30',
            },
      },
    )
    massMarks.setMap(state.map)
    if (visible === undefined || visible) massMarks.show()
    else massMarks.hide()
    setMassMarks(massMarks)
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
    if (opts !== undefined && JSON.stringify(opts) !== prevOpts) {
      const {data, style, visible, ...otherOpts} = opts
      massMarks.setData(
        data.map(point => ({
          ...point,
          lnglat: [point.lng, point.lat],
        })),
      )

      if (style) {
        if (Array.isArray(style))
          massMarks.setStyle(
            style.map(style => ({
              ...style,
              anchor: new AMap.Pixel(style.anchor.x, style.anchor.y),
              size: new AMap.Size(style.size.width, style.size.height),
            })),
          )
        else
          massMarks.setStyle({
            ...style,
            anchor: new AMap.Pixel(style.anchor.x, style.anchor.y),
            size: new AMap.Size(style.size.width, style.size.height),
          })
      }
      if (visible === undefined || visible) massMarks.show()
      else massMarks.hide()
      setPrevOpts(JSON.stringify(opts))
    }
  }, [massMarks, opts])

  return null
}

MassMarks.displayName = 'MassMarks'

export default MassMarks
