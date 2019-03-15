import React from 'react'
import {SatelliteLayerProps} from '../common/types'
import Layer from './Layer'

const SatelliteLayer = (props: SatelliteLayerProps) => (
  <Layer id="satellite" type="Satellite" {...props} />
)

SatelliteLayer.displayName = 'SatelliteLayer'

export default SatelliteLayer
