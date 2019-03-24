import React, {useState} from 'react'
import MyBezier from './components/MyBezier'
import MyCircle from './components/MyCircle'
import MyEllipse from './components/MyEllipse'
import MyHeatMap from './components/MyHeatMap'
import MyMapBox from './components/MyMapBox'
import MyMarker from './components/MyMarker'
import MyMassMarks from './components/MyMassMarks'
import MyPolygon from './components/MyPolygon'
import MyPolyline from './components/MyPolyline'
import MyRectangle from './components/MyRectangle'
import MySearch from './components/MySearch'
import {AMapProvider, RoadNetLayer, SatelliteLayer, TrafficLayer} from './lib'

const App = () => {
  const [count, setCount] = useState(0)
  const [overlay, setOverlay] = useState('bezier')
  const [roadNet, setRoadNet] = useState(false)
  const [satellite, setSatellite] = useState(false)
  const [traffic, setTraffic] = useState(false)
  return (
    <>
      <AMapProvider apiKey="36e0a42580b8f766b4bfe2a5f4169560">
        <div style={{display: 'flex', height: '95vh'}}>
          <div style={{flex: 1}}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <select
                defaultValue="bezier"
                onChange={event => setOverlay(event.target.value)}
              >
                <option value="bezier">Bezier Curve</option>
                <option value="circle">Circle</option>
                <option value="ellipse">Ellipse</option>
                <option value="heat">HeatMap</option>
                <option value="marker">Marker'n'InfoWindow</option>
                <option value="mass">MassMarks</option>
                <option value="rectangle">Rectangle</option>
                <option value="polygon">Polygon with holes</option>
                <option value="polyline">Polyline</option>
              </select>
              <div>
                {' '}
                <input
                  type="checkbox"
                  name="road-net"
                  onChange={() => setRoadNet(state => !state)}
                />
                RoadNet
              </div>
              <div>
                <input
                  type="checkbox"
                  name="satellite"
                  onChange={() => setSatellite(state => !state)}
                />
                Satellite
              </div>
              <div>
                <input
                  type="checkbox"
                  name="traffic"
                  onChange={() => setTraffic(state => !state)}
                />
                Traffic
              </div>
            </div>
            <hr />
            <MyMapBox />
            <MyBezier visible={overlay === 'bezier'} />
            <MyCircle visible={overlay === 'circle'} />
            <MyEllipse visible={overlay === 'ellipse'} />
            <MyHeatMap visible={overlay === 'heat'} />
            <MyMarker
              count={count}
              setCount={setCount}
              visible={overlay === 'marker'}
            />
            <MyMassMarks visible={overlay === 'mass'} />
            <MyRectangle visible={overlay === 'rectangle'} />
            <MyPolygon count={count} visible={overlay === 'polygon'} />
            <MyPolyline visible={overlay === 'polyline'} />
            <RoadNetLayer opts={{visible: roadNet}} />
            <SatelliteLayer opts={{visible: satellite}} />
            <TrafficLayer opts={{visible: traffic}} />
          </div>
          <div style={{flex: 1}}>
            <MySearch />
          </div>
        </div>
      </AMapProvider>
    </>
  )
}

App.displayName = 'App'

export default App
