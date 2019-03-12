import React, {useContext, useEffect} from 'react'
import {AMapAction} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'

export default ({action}: {action: AMapAction}) => {
  const {dispatch} = useContext(AMapContext)
  useEffect(() => {
    dispatch(action)
  }, [])
  return <div>This is a fake component</div>
}
