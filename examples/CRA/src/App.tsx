import React from 'react'
import {AMapProvider, MapBox, Marker} from './lib'

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
            zoom: 13,
          }}
        />
        <Marker
          opts={{
            draggable: true,
          }}
          onClick={() => {
            setCount(count => count + 1)
          }}
        >
          <p>{count}</p>
        </Marker>
      </AMapProvider>
    </>
  )
}

App.displayName = 'App'

export default App
