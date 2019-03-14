import React from 'react'
import {MassMarks} from '../lib'

const MyMassMarks = ({visible}: {visible: boolean}) => {
  return (
    <MassMarks
      data={[
        {lnglat: [116.4, 39.9], name: 'test-1', id: '1'},
        {lnglat: [116.0, 39.9], name: 'test-2', id: '2'},
        {lnglat: [116.8, 39.7], name: 'test-3', id: '3'},
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
