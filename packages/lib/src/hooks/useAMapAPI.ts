import {useState, useEffect} from 'react'
import loadjs from 'loadjs'
import {AMAP_BASE_URI} from '../common/constants'

const useAMapAPI = (apiKey: string) => {
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
        console.warn('Unable to fetch AMap sdk')
      },
    })
  }, [])
  return loaded
}

export default useAMapAPI
