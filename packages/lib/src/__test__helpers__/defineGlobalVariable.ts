class Autocomplete {
  constructor(opts: AMap.AutoCompleteOptions) {
    this.opts = opts
  }
  city?: string
  cityLimit?: boolean
  type?: string
  opts: AMap.AutoCompleteOptions
  setCity = (city: string) => {
    this.city = city
  }
  setCityLimit = (cityLimit: boolean) => {
    this.cityLimit = cityLimit
  }
  setType = (type: string) => {
    this.type = type
  }
}

class BezierCurve {
  constructor(opts: AMap.BezierCurveOptions) {
    this.opts = opts
  }
  opts: AMap.BezierCurveOptions
  setOptions = (opts: AMap.BezierCurveOptions) => {
    this.opts = opts
  }
}

class Bounds {
  constructor(southWest: number, northEast: number) {}
}

class Circle {
  constructor(opts: AMap.CircleOptions) {
    this.opts = opts
  }
  opts: AMap.CircleOptions
  setOptions = (opts: AMap.CircleOptions) => {
    this.opts = opts
  }
}

class Driving {
  constructor(opts: AMap.DrivingOptions) {
    this.opts = opts
  }
  opts: AMap.DrivingOptions
  search = () => {}
  setPolicy = (policy: AMap.DrivingPolicy) => {}
  setProvinceAndNumber = (province: string, number: string) => {}
}

class Ellipse {
  constructor(opts: AMap.EllipseOptions) {
    this.opts = opts
  }
  opts: AMap.EllipseOptions
  setOptions = (opts: AMap.EllipseOptions) => {
    this.opts = opts
  }
}

class Heatmap {
  constructor(map: AMap.Map, opts: AMap.HeatmapOptions) {
    this.opts = opts
  }
  opts: AMap.HeatmapOptions
  hide = () => {}
  setDataSet = (dataset: AMap.HeatmapDataset) => {}
  setOptions = (opts: AMap.HeatmapOptions) => {
    this.opts = opts
  }
  show = () => {}
}

class Icon {
  constructor(opts: AMap.IconOptions) {}
}

class InfoWindow {
  constructor(opts: AMap.InfoWindowOptions) {
    this.opts = opts
  }
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
}

class LngLat {
  constructor(lng: number, lat: number, noAutoFix?: boolean) {}
}

class Map {
  constructor(mapDiv: HTMLElement, opts: AMap.MapOptions) {
    this.opts = opts
  }
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
}

class Marker {
  constructor(opts: AMap.MarkerOptions) {
    this.opts = opts
  }
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
}

class MassMarks {
  constructor(data: Object[], opts: AMap.MassMarksOptions) {
    this.data = data
    this.opts = opts
  }
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
}

class Pixel {
  constructor(x: number, y: number) {}
}

class PlaceSearch {
  constructor(opts: AMap.PlaceSearchOptions) {
    this.opts = opts
  }
  city?: string
  citylimit?: boolean
  lang?: string
  opts: AMap.PlaceSearchOptions
  pageIndex?: number
  pageSize?: number
  type?: string
  search = (keyword: string, callback: Function) => {}
  searchInBounds = (
    keyword: string,
    bounds: AMap.Bounds,
    callback: Function,
  ) => {}
  searchNearBy = (
    keyword: string,
    center: AMap.LngLat,
    radius: number,
    callback: Function,
  ) => {}
  setCity = (city: string) => {
    this.city = city
  }
  setCityLimit = (citylimit: boolean) => {
    this.citylimit = citylimit
  }
  setLang = (lang: string) => {
    this.lang = lang
  }
  setPageIndex = (pageIndex: number) => {
    this.pageIndex = pageIndex
  }
  setPageSize = (pageSize: number) => {
    this.pageSize = pageSize
  }
  setType = (type: string) => {
    this.type = type
  }
}

function plugin(serviceNames: string[], callback: Function) {
  callback()
}

class Polygon {
  constructor(opts: AMap.PolygonOptions) {
    this.opts = opts
  }
  opts: AMap.PolygonOptions
  setOptions = (opts: AMap.PolygonOptions) => {
    this.opts = opts
  }
}

class Polyline {
  constructor(opts: AMap.PolylineOptions) {
    this.opts = opts
  }
  opts: AMap.PolylineOptions
  setOptions = (opts: AMap.PolylineOptions) => {
    this.opts = opts
  }
}

class Rectangle {
  constructor(opts: AMap.RectangleOptions) {
    this.opts = opts
  }
  opts: AMap.RectangleOptions
  setOptions = (opts: AMap.RectangleOptions) => {
    this.opts = opts
  }
}

class Size {
  constructor(width: number, height: number) {}
}

class TileLayer {
  constructor(opts: AMap.TileLayerOptions) {}
  opacity?: number
  hide = () => {}
  setOpacity = (opacity: number) => {
    this.opacity = opacity
  }
  show = () => {}
}

class RoadNet extends TileLayer {
  constructor(opts: AMap.RoadNetOptions) {
    super(opts)
  }
}

class Satellite extends TileLayer {
  constructor(opts: AMap.SatelliteOptions) {
    super(opts)
  }
}

class Traffic extends TileLayer {
  constructor(opts: AMap.TrafficOptions) {
    super(opts)
  }
}

const defineGlobalVariable = () => {
  Object.defineProperty(global, 'AMap', {
    value: {
      Autocomplete,
      BezierCurve,
      Bounds,
      Circle,
      Driving,
      Ellipse,
      event: {
        addListener: () => {},
        removeListener: () => {},
      },
      Heatmap,
      Icon,
      InfoWindow,
      LngLat,
      Map,
      Marker,
      MassMarks,
      plugin,
      Pixel,
      PlaceSearch,
      Polygon,
      Polyline,
      Rectangle,
      Size,
      TileLayer: Object.assign(TileLayer, {RoadNet, Satellite, Traffic}),
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
