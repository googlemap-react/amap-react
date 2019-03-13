import React from 'react'
import {Rectangle} from '../lib'

const MyRectangle = ({visible}: {visible: boolean}) => (
  <Rectangle
    opts={{
      bounds: {
        southWest: {lng: 116.3, lat: 39.8},
        northEast: {lng: 116.5, lat: 40.0},
      },
      visible: visible,
    }}
  />
)

MyRectangle.displayName = MyRectangle

export default MyRectangle
