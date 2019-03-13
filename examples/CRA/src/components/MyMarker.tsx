import React from 'react'
import Pentagram from './Pentagram'
import {InfoWindow, Marker} from '../lib'

interface MyMarkerProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const MyMarker = ({count, setCount}: MyMarkerProps) => (
  <>
    <Marker
      id="marker"
      opts={{
        draggable: true,
        position: {
          lng: 116.4,
          lat: 39.9,
        },
      }}
      onClick={() => {
        setCount(count => count + 1)
      }}
    >
      <Pentagram size={2} />
    </Marker>
    <InfoWindow
      anchorId="marker"
      visible={count % 2 === 0}
      opts={{
        anchor: 'top-center',
        offset: {
          x: 10,
          y: 10,
        },
      }}
    >
      <p>Count: {count}</p>
    </InfoWindow>
  </>
)

MyMarker.displayName = 'MyMarker'

export default MyMarker
