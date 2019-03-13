import React from 'react'
import {MapBox} from '../lib'

const MyMapBox = () => (
  <MapBox
    apiKey="36e0a42580b8f766b4bfe2a5f4169560"
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
