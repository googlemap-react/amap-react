import React from 'react'
import {MapBox} from '../lib'

interface MyMapBoxProps {
  zoom: number
}

const MyMapBox = ({zoom}: MyMapBoxProps) => (
  <MapBox
    apiKey="36e0a42580b8f766b4bfe2a5f4169560"
    style={{
      height: '500px',
      width: '100%',
    }}
    onClick={() => {
      console.log('map clicked')
    }}
    opts={{
      center: {
        lng: 116.4,
        lat: 39.9,
      },
      zoom: zoom,
    }}
  />
)

MyMapBox.displayName = 'MyMapBox'

export default MyMapBox
