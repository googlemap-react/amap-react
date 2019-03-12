import React, {useContext, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {InfoWindowProps} from '../common/types'
import {AMapContext} from '../contexts/AMapContext'
import {useAMapListener} from '../hooks'

const InfoWindow = ({
  children,
  anchorId,
  opts = {},
  visible,
  onChange,
  onClose,
  onOpen,
}: InfoWindowProps): React.ReactPortal | null => {
  if (typeof document === 'undefined') return null
  const {state} = useContext(AMapContext)
  const [prevOpts, setPrevOpts] = useState('')
  const [infoWindow, setInfoWindow] = useState<AMap.InfoWindow | undefined>(
    undefined,
  )
  const [container] = useState(document.createElement('div'))

  useEffect(() => {
    if (state.map === undefined) return
    const infoWindow = new AMap.InfoWindow({
      ...opts,
      content: children ? container : opts.content,
      position: opts.position
        ? new AMap.LngLat(
            opts.position.lng,
            opts.position.lat,
            opts.position.noAutoFix,
          )
        : undefined,
    })
    setInfoWindow(infoWindow)
    setPrevOpts(JSON.stringify(opts))

    // Close the info window when the component is unmounted
    return () => infoWindow.close()
  }, [state.map])

  useEffect(() => {
    if (state.map === undefined || infoWindow === undefined) return
    let anchor: any = null
    if (!!anchorId) {
      anchor = state.objects.get(anchorId)
      anchor &&
        AMap.event.addListener(anchor, 'position_changed', (event: any) => {
          infoWindow.setPosition(event.position)
        })
    }

    // Open or close the info window according to the `visible` prop
    if (visible) {
      infoWindow.open(
        state.map,
        anchor
          ? anchor.getPosition() // First use anchor
          : opts.position // Then use opts.position
          ? new AMap.LngLat(
              opts.position.lng,
              opts.position.lat,
              opts.position.noAutoFix,
            )
          : state.map.getCenter(), // Fallback: place the info window at the center of the map
      )
    } else infoWindow.close()
  }, [infoWindow, anchorId, visible])

  // Register event listeners
  useAMapListener(infoWindow, [
    {name: 'change', handler: onChange},
    {name: 'close', handler: onClose},
    {name: 'open', handler: onOpen},
  ])

  // Modify the AMap.InfoWindow object when component props change
  useEffect(() => {
    if (
      infoWindow === undefined ||
      opts === undefined ||
      JSON.stringify(opts) === prevOpts
    )
      return
    opts.anchor && infoWindow.setAnchor(opts.anchor)
    opts.content && infoWindow.setContent(opts.content)
    opts.position &&
      infoWindow.setPosition(
        new AMap.LngLat(
          opts.position.lng,
          opts.position.lat,
          opts.position.noAutoFix,
        ),
      )
    opts.size && infoWindow.setSize(opts.size)
  }, [opts])

  return ReactDOM.createPortal(children, container)
}

InfoWindow.displayName = 'InfoWindow'

export default InfoWindow
