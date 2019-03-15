import React from 'react'
import Pentagram from './Pentagram'
import {InfoWindow, Marker, SearchBox} from '../lib'

interface MyMarkerProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  visible: boolean
}

const MyMarker = ({count, setCount, visible}: MyMarkerProps) => (
  <>
    <Marker
      id="marker"
      opts={{
        draggable: true,
        position: {
          lng: 116.4,
          lat: 39.9,
        },
        visible: visible,
      }}
      onClick={() => {
        setCount(count => count + 1)
      }}
    >
      <Pentagram size={2} />
    </Marker>
    {visible ? (
      <InfoWindow
        anchorId="marker"
        opts={{
          anchor: 'top-center',
          offset: {
            x: 10,
            y: 10,
          },
          visible: count % 2 === 0,
        }}
      >
        <p>Count: {count}</p>
      </InfoWindow>
    ) : null}
  </>
)

MyMarker.displayName = 'MyMarker'

export default MyMarker
