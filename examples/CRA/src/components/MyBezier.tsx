import React from 'react'
import {BezierCurve} from '../lib'

const MyBezier = ({visible}: {visible: boolean}) => {
  return (
    <BezierCurve
      opts={{
        path: [[116.4, 39.9], [116.3, 40.0, 116.2, 39.7]],
        visible: visible,
      }}
    />
  )
}

MyBezier.displayName = 'MyBezier'

export default MyBezier
