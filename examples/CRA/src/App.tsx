import React from 'react'
import MyPolygon from './components/MyPolygon'
import Pentagram from './components/Pentagram'
import {AMapProvider, InfoWindow, MapBox, Marker, Polyline} from './lib'

const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <AMapProvider>
        <MapBox
          apiKey="36e0a42580b8f766b4bfe2a5f4169560"
          style={{
            height: '500px',
            width: '100%',
          }}
          onClick={() => {
            setCount(count => count + 1)
          }}
          opts={{
            center: {
              lng: 116.4,
              lat: 39.9,
            },
            zoom: 10,
          }}
        />
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
        <MyPolygon count={count} />
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
      </AMapProvider>
    </>
  )
}

App.displayName = 'App'

export default App
