import {useState, useEffect} from 'react'
import loadjs from 'loadjs'
import {AMAP_BASE_URI} from '../common/constants'
import {AMapAPIProps} from '../common/types'

const useAMapAPI = ({apiKey}: AMapAPIProps) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    // Should not load script at server side
    if (typeof document === 'undefined') return

    const aMapScriptUri = `${AMAP_BASE_URI}${apiKey}`
    if (!loadjs.isDefined('amap')) loadjs(aMapScriptUri, 'amap')
    loadjs.ready('amap', {
      success: () => {
        setLoaded(true)
      },
      error: () => {
        loadjs.reset()
        console.error('Unable to fetch AMap sdk')
      },
    })
  }, [])
  return loaded
}

export default useAMapAPI
