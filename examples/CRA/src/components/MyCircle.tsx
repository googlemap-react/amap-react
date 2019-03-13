import React from 'react'
import {Circle} from '../lib'

const MyCircle = ({visible}: {visible: boolean}) => (
  <Circle
    opts={{
      center: {lng: 116.4, lat: 39.9},
      radius: 10000,
      visible: visible,
    }}
  />
)

MyCircle.displayName = MyCircle

export default MyCircle
