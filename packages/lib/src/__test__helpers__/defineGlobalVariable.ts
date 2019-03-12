import {EventEmitter} from 'events'
import {removeListener} from 'cluster'

class Bounds {
  constructor(southWest: number, northEast: number) {}
}

class InfoWindow {
  content?: string | HTMLElement
  opts: AMap.InfoWindowOptions
  position?: AMap.LngLat
  close = () => {}
  open = (map: AMap.Map, position: AMap.LngLat) => {}
  setContent = (content: string | HTMLElement) => {
    this.content = content
  }
  setPosition = (position: AMap.LngLat) => {
    this.position = position
  }
  constructor(opts: AMap.InfoWindowOptions) {
    this.opts = opts
  }
}

class LngLat {
  constructor(lng: number, lat: number, noAutoFix?: boolean) {}
}

class Map {
  center?: AMap.LngLat
  opts: AMap.MapOptions
  clearMap = () => {}
  destroy = () => {}
  getCenter = () => this.center
  setCenter = (center: AMap.LngLat) => {
    this.center = center
  }
  constructor(mapDiv: HTMLElement, opts: AMap.MapOptions) {
    this.opts = opts
  }
}

class Marker {
  label?: AMap.MarkerLabel
  opts: AMap.MarkerOptions
  position?: AMap.LngLat
  title?: string
  zIndex?: number
  getPosition = () => this.position
  setLabel = (label: AMap.MarkerLabel) => {
    this.label = label
  }
  setPosition = (position: AMap.LngLat) => {
    this.position = position
  }
  setTitle = (title: string) => {
    this.title = title
  }
  setzIndex = (zIndex: number) => {
    this.zIndex = zIndex
  }
  constructor(opts: AMap.MarkerOptions) {
    this.opts = opts
  }
}

class Pixel {
  constructor(x: number, y: number) {}
}

class Size {
  constructor(width: number, height: number) {}
}

const defineGlobalVariable = () => {
  Object.defineProperty(global, 'AMap', {
    value: {
      Bounds: Bounds,
      event: {
        addListener: () => {},
        removeListener: () => {},
      },
      InfoWindow: InfoWindow,
      LngLat: LngLat,
      Map: Map,
      Marker: Marker,
      Pixel: Pixel,
      Size: Size,
    },
    writable: true,
  })
  Object.defineProperty((global as any).document, 'createRange', {
    value: () => ({
      createContextualFragment: (fragment: string) => ({
        firstElementChild: document.createElement('input'),
      }),
    }),
  })
}

export default defineGlobalVariable
