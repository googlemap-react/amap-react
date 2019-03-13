import React from 'react'
import MyBezier from './components/MyBezier'
import MyMapBox from './components/MyMapBox'
import MyMarker from './components/MyMarker'
import MyPolygon from './components/MyPolygon'
import MyPolyline from './components/MyPolyline'
import {AMapProvider} from './lib'

const App = () => {
  const [count, setCount] = React.useState(0)
  const [zoom, setZoom] = React.useState(10)
  const [overlay, setOverlay] = React.useState('marker')
  return (
    <>
      <AMapProvider>
        <select
          defaultValue="marker"
          onChange={event => setOverlay(event.target.value)}
        >
          <option value="bezier">Bezier Curve</option>
          <option value="marker">Marker'n'InfoWindow</option>
          <option value="polygon">Polygon with holes</option>
          <option value="polyline">Polyline</option>
        </select>
        <MyMapBox zoom={zoom} />
        {
          ({
            bezier: <MyBezier setZoom={setZoom} />,
            marker: <MyMarker count={count} setCount={setCount} />,
            polygon: <MyPolygon count={count} />,
            polyline: <MyPolyline />,
          } as any)[overlay]
        }
      </AMapProvider>
    </>
  )
}

App.displayName = 'App'

export default App
