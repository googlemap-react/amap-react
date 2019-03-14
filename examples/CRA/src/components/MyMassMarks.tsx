import React from 'react'
import {MassMarks} from '../lib'

const MyMassMarks = ({visible}: {visible: boolean}) => {
  return (
    <MassMarks
      data={[
        {lng: 116.4, lat: 39.9, name: 'test-1', id: '1'},
        {lng: 116.0, lat: 39.9, name: 'test-2', id: '2'},
        {lng: 116.8, lat: 39.7, name: 'test-3', id: '3'},
      ]}
      opts={{
        visible: visible,
        zIndex: 110,
      }}
    />
  )
}

MyMassMarks.displayName = 'MyMassMarks'

export default MyMassMarks
