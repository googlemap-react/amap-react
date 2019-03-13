import {EventEmitter} from 'events'
import {removeListener} from 'cluster'

class BezierCurve {
  opts: AMap.BezierCurveOptions
  setOptions = (opts: AMap.BezierCurveOptions) => {
    this.opts = opts
  }
  constructor(opts: AMap.BezierCurveOptions) {
    this.opts = opts
  }
}

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
  features?: AMap.Feature[]
  labelzIndex?: number
  lang?: string
  opts: AMap.MapOptions
  pitch?: number
  rotation?: number
  zoom?: number
  clearMap = () => {}
  destroy = () => {}
  getCenter = () => this.center
  setCenter = (center: AMap.LngLat) => {
    this.center = center
  }
  setFeatures = (features: AMap.Feature[]) => {
    this.features = features
  }
  setLabelzIndex = (labelzIndex: number) => {
    this.labelzIndex = labelzIndex
  }
  setLang = (lang: string) => {
    this.lang = lang
  }
  setPitch = (pitch: number) => {
    this.pitch = pitch
  }
  setRotation = (rotation: number) => {
    this.rotation = rotation
  }
  setZoom = (zoom: number) => {
    this.zoom = zoom
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
  hide = () => {}
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
  show = () => {}
  constructor(opts: AMap.MarkerOptions) {
    this.opts = opts
  }
}

class Pixel {
  constructor(x: number, y: number) {}
}

class Polygon {
  opts: AMap.PolygonOptions
  setOptions = (opts: AMap.PolygonOptions) => {
    this.opts = opts
  }
  constructor(opts: AMap.PolygonOptions) {
    this.opts = opts
  }
}

class Polyline {
  opts: AMap.PolylineOptions
  setOptions = (opts: AMap.PolylineOptions) => {
    this.opts = opts
  }
  constructor(opts: AMap.PolylineOptions) {
    this.opts = opts
  }
}
class Size {
  constructor(width: number, height: number) {}
}

const defineGlobalVariable = () => {
  Object.defineProperty(global, 'AMap', {
    value: {
      BezierCurve: BezierCurve,
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
      Polygon: Polygon,
      Polyline: Polyline,
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
