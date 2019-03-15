import React from 'react'
import {TrafficLayerProps} from '../common/types'
import Layer from './Layer'

const TrafficLayer = (props: TrafficLayerProps) => (
  <Layer id="traffic" type="Traffic" {...props} />
)

TrafficLayer.displayName = 'TrafficLayer'

export default TrafficLayer
