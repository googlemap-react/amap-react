import React from 'react'
import {AMapProvider, InfoWindow, MapBox, Marker} from './lib'

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
            console.log('map clicked!')
          }}
          opts={{
            center: {
              lng: 116.4,
              lat: 39.9,
            },
            zoom: 13,
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="38"
            height="36"
          >
            <polygon
              points="20,0 32,36 2,12 38,12 8,36"
              style={{fill: 'red', stroke: 'red', strokeWidth: 1}}
            />
          </svg>
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
      </AMapProvider>
    </>
  )
}

App.displayName = 'App'

export default App
