import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {HeatMapProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'

const HeatMap = ({id, opts = {}}: HeatMapProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [heatMap, setHeatMap] = useState<AMap.Heatmap | undefined>(undefined)
  const [heatMapId] = useState(id ? id : `heatMap-${uuid()}`)

  const addHeatMap = (heatMap: AMap.Heatmap) =>
    dispatch({type: 'add_object', object: heatMap, id: heatMapId})
  const removeHeatMap = () => dispatch({type: 'remove_object', id: heatMapId})

  useEffect(() => {
    if (state.map === undefined) return
    const {dataset, visible, ...otherOpts} = opts
    state.map.plugin(['AMap.Heatmap'], () => {
      if (state.map === undefined) return
      const heatMap = new AMap.Heatmap(state.map, otherOpts)
      dataset && heatMap.setDataSet(dataset)
      if (opts.visible === undefined || opts.visible) heatMap.show()
      else heatMap.hide()
      setHeatMap(heatMap)
      setPrevOpts(JSON.stringify(opts))

      // Add the heatMap to state.objects
      addHeatMap(heatMap)
    })

    // Remove the heatMap when the component is unmounted
    return () => removeHeatMap()
  }, [state.map])

  // Modify the AMap.HeatMap object when component props change
  useEffect(() => {
    if (heatMap === undefined) return
    if (opts !== undefined && JSON.stringify(opts) !== prevOpts) {
      const {dataset, visible, ...otherOpts} = opts
      dataset && heatMap.setDataSet(dataset)
      if (visible === undefined || opts.visible) heatMap.show()
      else heatMap.hide()
      otherOpts && heatMap.setOptions(otherOpts)
      setPrevOpts(JSON.stringify(opts))
    }
  }, [heatMap, opts])

  return null
}

HeatMap.displayName = 'HeatMap'

export default HeatMap
