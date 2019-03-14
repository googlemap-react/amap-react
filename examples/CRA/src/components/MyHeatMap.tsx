import React from 'react'
import {HeatMap} from '../lib'

const MyHeatMap = ({visible}: {visible: boolean}) => (
  <HeatMap
    opts={{
      dataset: {
        data: [
          {lng: 116.4, lat: 39.9, count: 10},
          {lng: 116.5, lat: 39.8, count: 8},
          {lng: 116.3, lat: 39.76, count: 10},
        ],
      },
      radius: 235,
      visible: visible,
    }}
  />
)

MyHeatMap.displayName = MyHeatMap

export default MyHeatMap
