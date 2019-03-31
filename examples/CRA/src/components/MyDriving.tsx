import React from 'react'
import {Driving} from '../lib'

const MyDriving = () => (
  <>
    <Driving
      // Using origin and destination
      // origin={{
      //   lng: 116.4,
      //   lat: 39.8,
      // }}
      // destination={{
      //   lng: 116.6,
      //   lat: 39.7,
      // }}

      // Using points
      points={[
        {keyword: '北京大学东门', city: '北京市'},
        {keyword: '北京师范大学', city: '北京市'},
      ]}
      opts={{
        panel: 'driving-output',
      }}
      onComplete={result => console.log(result)}
    />
    <div id="driving-output" />
  </>
)

MyDriving.displayName = MyDriving

export default MyDriving
