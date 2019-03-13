import React, {useEffect} from 'react'
import {BezierCurve} from '../lib'

interface MyBezierProps {
  setZoom: React.Dispatch<React.SetStateAction<number>>
}

const MyBezier = ({setZoom}: MyBezierProps) => {
  useEffect(() => {
    setZoom(1)
    return () => setZoom(10)
  }, [])
  return (
    <BezierCurve
      opts={{
        path: [[[116, 4, 39.9]], [[0, 0], [36.2, 39.7]]],
      }}
    />
  )
}

MyBezier.displayName = 'MyBezier'

export default MyBezier
