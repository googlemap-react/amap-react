import React from 'react'
import {Polygon} from '../lib'

const MyPolygon = ({count}: {count: number}) => (
  <Polygon
    opts={{
      fillColor: 'blue',
      pathWithHole: [
        [
          {lng: 116.4, lat: 39.9},
          {lng: 116.5, lat: 39.9},
          {lng: 116.5, lat: 39.8},
          {lng: 116.4, lat: 39.8},
        ],
        [
          {lng: 116.45, lat: 39.89},
          {lng: 116.48, lat: 39.89},
          {lng: 116.48, lat: 39.81},
          {lng: 116.45, lat: 39.81},
        ],
        [
          {lng: 116.41 + count / 100, lat: 39.89},
          {lng: 116.42, lat: 39.89},
          {lng: 116.42, lat: 39.81},
          {lng: 116.41, lat: 39.81},
        ],
      ],
      strokeColor: 'red',
    }}
  />
)

MyPolygon.displayName = 'MyPolygon'

export default MyPolygon
