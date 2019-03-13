import React from 'react'
import MyBezier from './components/MyBezier'
import MyCircle from './components/MyCircle'
import MyMapBox from './components/MyMapBox'
import MyMarker from './components/MyMarker'
import MyPolygon from './components/MyPolygon'
import MyPolyline from './components/MyPolyline'
import {AMapProvider} from './lib'

const App = () => {
  const [count, setCount] = React.useState(0)
  const [overlay, setOverlay] = React.useState('bezier')
  return (
    <>
      <AMapProvider>
        <select
          defaultValue="bezier"
          onChange={event => setOverlay(event.target.value)}
        >
          <option value="bezier">Bezier Curve</option>
          <option value="circle">Circle</option>
          <option value="marker">Marker'n'InfoWindow</option>
          <option value="polygon">Polygon with holes</option>
          <option value="polyline">Polyline</option>
        </select>
        <MyMapBox />
        <MyBezier visible={overlay === 'bezier'} />
        <MyCircle visible={overlay === 'circle'} />
        <MyMarker
          count={count}
          setCount={setCount}
          visible={overlay === 'marker'}
        />
        <MyPolygon count={count} visible={overlay === 'polygon'} />
        <MyPolyline visible={overlay === 'polyline'} />
      </AMapProvider>
    </>
  )
}

App.displayName = 'App'

export default App
