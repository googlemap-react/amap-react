import React from 'react'
import {Polyline} from '../lib'

const MyPolyline = () => (
  <Polyline
    opts={{
      path: [
        {lng: 116.4, lat: 39.9},
        {lng: 116.5, lat: 39.9},
        {lng: 116.5, lat: 39.8},
        {lng: 116.4, lat: 39.8},
      ],
    }}
  />
)

MyPolyline.displayName = MyPolyline

export default MyPolyline
