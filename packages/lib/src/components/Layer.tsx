import React, {useContext, useEffect, useState} from 'react'
import uuid from 'uuid/v1'
import {LayerProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener} from '../hooks'

const Layer = ({id, opts = {}, type, onComplete}: LayerProps) => {
  const {state, dispatch} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [layer, setLayer] = useState<AMap.TileLayer | undefined>(undefined)
  const [layerId] = useState(id ? id : `layer-${uuid()}`)

  const addLayer = (layer: AMap.TileLayer) =>
    dispatch({type: 'add_object', object: layer, id: layerId})
  const removeLayer = () => dispatch({type: 'remove_object', id: layerId})

  useEffect(() => {
    if (state.map === undefined) return
    const {visible, ...otherOpts} = opts
    const layer = type
      ? new (AMap.TileLayer as any)[type]({...otherOpts, map: state.map})
      : new AMap.TileLayer({...otherOpts, map: state.map})
    if (visible === undefined || visible) layer.show()
    else layer.hide()
    setLayer(layer)
    setPrevOpts(JSON.stringify(opts))

    // Add the layer to state.objects
    addLayer(layer)

    // Remove the layer when the component is unmounted
    return () => removeLayer()
  }, [state.map])

  // Register AMap event listeners
  useAMapListener(layer, [{name: 'complete', handler: onComplete}])

  // Modify the AMap.Layer object when component props change
  useEffect(() => {
    if (layer === undefined) return
    if (opts !== undefined && JSON.stringify(opts) !== prevOpts) {
      const {opacity, tileUrl, visible, zIndex} = opts
      opacity && layer.setOpacity(opacity)
      tileUrl && layer.setTileUrl(tileUrl)
      if (visible === undefined || visible) layer.show()
      else layer.hide()
      zIndex && layer.setzIndex(zIndex)
      setPrevOpts(JSON.stringify(opts))
    }
  }, [layer, opts])

  return null
}

Layer.displayName = 'Layer'

export default Layer
