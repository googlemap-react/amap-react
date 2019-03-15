import React from 'react'
import {RoadNetLayerProps} from '../common/types'
import Layer from './Layer'

const RoadNetLayer = (props: RoadNetLayerProps) => (
  <Layer id="road-net" type="RoadNet" {...props} />
)

RoadNetLayer.displayName = 'RoadNetLayer'

export default RoadNetLayer
