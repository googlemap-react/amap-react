import {useEffect} from 'react'

interface AMapEvent {
  name: string
  handler?: Function
}

const useAMapListener = (
  instance: AMap.MVCObject | undefined,
  events: AMapEvent[],
) => {
  useEffect(() => {
    if (instance === undefined) return
    const listeners: any[] = []
    events.forEach(event => {
      if (event.handler)
        listeners.push(
          AMap.event.addListener(instance, event.name, event.handler),
        )
    })
    return () => {
      listeners.forEach(listener => AMap.event.removeListener(listener))
    }
  }, [instance, events])
}

export default useAMapListener
