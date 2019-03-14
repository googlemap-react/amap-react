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

class Circle {
  opts: AMap.CircleOptions
  setOptions = (opts: AMap.CircleOptions) => {
    this.opts = opts
  }
  constructor(opts: AMap.CircleOptions) {
    this.opts = opts
  }
}

class Ellipse {
  opts: AMap.EllipseOptions
  setOptions = (opts: AMap.EllipseOptions) => {
    this.opts = opts
  }
  constructor(opts: AMap.EllipseOptions) {
    this.opts = opts
  }
}

class Heatmap {
  opts: AMap.HeatmapOptions
  hide = () => {}
  setDataSet = (dataset: AMap.HeatmapDataset) => {}
  setOptions = (opts: AMap.HeatmapOptions) => {
    this.opts = opts
  }
  show = () => {}
  constructor(map: AMap.Map, opts: AMap.HeatmapOptions) {
    this.opts = opts
  }
}

class Icon {
  constructor(opts: AMap.IconOptions) {}
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
  plugin = (name: string | string[], callback: Function) => {
    callback()
  }
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
  icon?: string | AMap.Icon
  label?: AMap.MarkerLabel
  opts: AMap.MarkerOptions
  position?: AMap.LngLat
  title?: string
  zIndex?: number
  getPosition = () => this.position
  hide = () => {}
  setIcon = (icon: string | AMap.Icon) => {
    this.icon = icon
  }
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

class MassMarks {
  data?: Object[]
  map?: AMap.Map
  opts: AMap.MassMarksOptions
  style?: AMap.StyleObjectOptions | AMap.StyleObjectOptions[]
  hide = () => {}
  setData = (data: Object[]) => {
    this.data = data
  }
  setMap = (map: AMap.Map) => {
    this.map = map
  }
  setStyle = (style: AMap.StyleObjectOptions | AMap.StyleObjectOptions[]) => {
    this.style = style
  }
  show = () => {}
  constructor(data: Object[], opts: AMap.MassMarksOptions) {
    this.data = data
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

class Rectangle {
  opts: AMap.RectangleOptions
  setOptions = (opts: AMap.RectangleOptions) => {
    this.opts = opts
  }
  constructor(opts: AMap.RectangleOptions) {
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
      Circle: Circle,
      Ellipse: Ellipse,
      event: {
        addListener: () => {},
        removeListener: () => {},
      },
      Heatmap: Heatmap,
      Icon: Icon,
      InfoWindow: InfoWindow,
      LngLat: LngLat,
      Map: Map,
      Marker: Marker,
      MassMarks: MassMarks,
      Pixel: Pixel,
      Polygon: Polygon,
      Polyline: Polyline,
      Rectangle: Rectangle,
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
