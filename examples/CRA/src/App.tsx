import React from 'react'
import Pentagram from './components/Pentagram'
import {AMapProvider, InfoWindow, MapBox, Marker, Polygon} from './lib'

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
      </AMapProvider>
    </>
  )
}

App.displayName = 'App'

export default App
