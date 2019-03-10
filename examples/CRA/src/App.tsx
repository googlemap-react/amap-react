import React from 'react'
import {AMapProvider, MapBox} from './lib'

const App = () => {
  return (
    <>
      <AMapProvider>
        <MapBox
          apiKey="36e0a42580b8f766b4bfe2a5f4169560"
          style={{
            height: '500px',
            width: '100%',
          }}
        />
      </AMapProvider>
    </>
  )
}

App.displayName = 'App'

export default App
