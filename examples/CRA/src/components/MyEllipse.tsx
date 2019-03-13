import React from 'react'
import {Ellipse} from '../lib'

const MyEllipse = ({visible}: {visible: boolean}) => (
  <Ellipse
    opts={{
      center: {lng: 116.4, lat: 39.9},
      radius: [10000, 8000],
      visible: visible,
    }}
  />
)

MyEllipse.displayName = MyEllipse

export default MyEllipse
