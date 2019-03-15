import React from 'react'
import {MapBox} from '../lib'

const MyMapBox = () => (
  <MapBox
    style={{
      height: '500px',
      width: '100%',
    }}
    opts={{
      center: {
        lng: 116.4,
        lat: 39.9,
      },
      zoom: 10,
    }}
  />
)

MyMapBox.displayName = 'MyMapBox'

export default MyMapBox
