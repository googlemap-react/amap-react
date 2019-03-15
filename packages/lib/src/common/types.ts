export interface AMapReducer {
  state: AMapState
  dispatch: React.Dispatch<AMapAction>
}

export interface AMapState {
  apiKey: string
  map?: AMap.Map
  objects: Map<string, Object>
}

export interface AMapAction {
  type: string
  map?: AMap.Map
  id?: string
  object?: Object
}

export interface AMapProviderProps {
  apiKey: string
  children: React.ReactNode
}

export interface BasicShapeProps {
  id?: string
  onChange?: () => void
  onClick?: (event: AMap.MapsEvent) => void
  onDoubleClick?: (event: AMap.MapsEvent) => void
  onHide?: (type: string, target: Object) => void
  onMouseDown?: (event: AMap.MapsEvent) => void
  onMouseOver?: (event: AMap.MapsEvent) => void
  onMouseOut?: (event: AMap.MapsEvent) => void
  onMouseUp?: (event: AMap.MapsEvent) => void
  onRightClick?: (event: AMap.MapsEvent) => void
  onShow?: (type: string, target: Object) => void
  onTouchEnd?: (event: AMap.MapsEvent) => void
  onTouchMove?: (event: AMap.MapsEvent) => void
  onTouchStart?: (event: AMap.MapsEvent) => void
}

export interface BezierCurveProps extends BasicShapeProps {
  opts?: AMap.BezierCurveOptions
}

export interface CircleOptions extends AMap.CircleOptions {
  center?: AMap.LngLatLiteral
}

export interface CircleProps extends BasicShapeProps {
  opts?: CircleOptions
}

export interface EllipseOptions extends AMap.EllipseOptions {
  center?: AMap.LngLatLiteral
}

export interface EllipseProps extends BasicShapeProps {
  opts?: EllipseOptions
}

export interface HeatMapOptions extends AMap.HeatmapOptions {
  dataset?: AMap.HeatmapDataset
  visible?: boolean
}

export interface HeatMapProps {
  id?: string
  opts?: HeatMapOptions
}

export interface InfoWindowOptions extends AMap.InfoWindowOptions {
  position?: AMap.LngLatLiteral
  visible?: boolean
}

export interface InfoWindowProps {
  children?: React.ReactNode
  anchorId?: string
  opts?: InfoWindowOptions
  onChange?: () => void
  onClose?: () => void
  onOpen?: () => void
}

export interface LayerProps {
  id?: string
  opts?: AMap.TileLayerOptions
  type?: 'RoadNet' | 'Satellite' | 'Traffic'
  onComplete?: () => void
}

export interface MapBoxOptions extends AMap.MapOptions {
  center?: AMap.LngLatLiteral
}

export interface MapBoxProps {
  className?: string
  opts?: MapBoxOptions
  style?: React.CSSProperties
  LoadingComponent?: React.ReactNode
  LoadedComponent?: React.ReactNode
  onClick?: (event: AMap.MapsEvent) => void
  onComplete?: () => void
  onDoubleClick?: (event: AMap.MapsEvent) => void
  onDragEnd?: () => void
  onDragging?: () => void
  onDragStart?: () => void
  onHotSpotClick?: (event: AMap.MapsHotSpotEvent) => void
  onHotSpotOut?: (event: AMap.MapsHotSpotEvent) => void
  onHotSpotOver?: (event: AMap.MapsHotSpotEvent) => void
  onMapMove?: () => void
  onMouseDown?: (event: AMap.MapsEvent) => void
  onMouseEnd?: () => void
  onMouseMove?: (event: AMap.MapsEvent) => void
  onMouseOver?: (event: AMap.MapsEvent) => void
  onMouseOut?: (event: AMap.MapsEvent) => void
  onMouseStart?: () => void
  onMouseUp?: (event: AMap.MapsEvent) => void
  onMouseWheel?: (event: AMap.MapsEvent) => void
  onMoveEnd?: () => void
  onMoveStart?: () => void
  onResize?: () => void
  onRightClick?: (event: AMap.MapsEvent) => void
  onTouchEnd?: (event: AMap.MapsEvent) => void
  onTouchMove?: (event: AMap.MapsEvent) => void
  onTouchStart?: (event: AMap.MapsEvent) => void
  onZoomChange?: () => void
  onZoomEnd?: () => void
  onZoomStart?: () => void
}

export interface MarkerOptions extends AMap.MarkerOptions {
  icon?: string | AMap.IconLiteral
  position?: AMap.LngLatLiteral
}

export interface MarkerProps {
  children?: React.ReactNode
  id?: string
  opts?: MarkerOptions
  onClick?: (event: AMap.MapsEvent) => void
  onDoubleClick?: (event: AMap.MapsEvent) => void
  onDragEnd?: (event: AMap.MapsEvent) => void
  onDragging?: (event: AMap.MapsEvent) => void
  onDragStart?: (event: AMap.MapsEvent) => void
  onMouseDown?: (event: AMap.MapsEvent) => void
  onMouseMove?: (event: AMap.MapsEvent) => void
  onMouseOver?: (event: AMap.MapsEvent) => void
  onMouseOut?: (event: AMap.MapsEvent) => void
  onMouseUp?: (event: AMap.MapsEvent) => void
  onMoveAlong?: () => void
  onMoveEnd?: () => void
  onMoving?: ({passedPath}: {passedPath: AMap.LngLat[]}) => void
  onRightClick?: (event: AMap.MapsEvent) => void
  onTouchEnd?: (event: AMap.MapsEvent) => void
  onTouchMove?: (event: AMap.MapsEvent) => void
  onTouchStart?: (event: AMap.MapsEvent) => void
}

export interface MassMarksOptions extends AMap.MassMarksOptions {
  data: AMap.MassMarkLiteral[]
  style?: AMap.StyleObjectOptionsLiteral | AMap.StyleObjectOptionsLiteral[]
  visible?: boolean
}

export interface MassMarksProps {
  id?: string
  opts?: MassMarksOptions
  onClick?: (event: AMap.MapsEvent) => void
  onComplete?: () => void
  onDoubleClick?: (event: AMap.MapsEvent) => void
  onMouseDown?: (event: AMap.MapsEvent) => void
  onMouseOut?: (event: AMap.MapsEvent) => void
  onMouseUp?: (event: AMap.MapsEvent) => void
  onTouchEnd?: (event: AMap.MapsEvent) => void
  onTouchStart?: (event: AMap.MapsEvent) => void
}

export interface PolygonOptions extends AMap.PolygonOptions {
  path?: AMap.LngLatLiteral[]
  path2D?: AMap.LngLatLiteral[][]
}

export interface PolygonProps extends BasicShapeProps {
  opts?: PolygonOptions
}

export interface PolylineOptions extends AMap.PolylineOptions {
  path?: AMap.LngLatLiteral[]
}

export interface PolylineProps extends BasicShapeProps {
  opts?: PolylineOptions
}

export interface RectangleOptions extends AMap.RectangleOptions {
  bounds?: AMap.BoundsLiteral
}

export interface RectangleProps extends BasicShapeProps {
  opts?: RectangleOptions
}

export interface RoadNetLayerProps {
  opts?: AMap.RoadNetOptions
  onComplete?: () => void
}

export interface SatelliteLayerProps {
  opts?: AMap.SatelliteOptions
  onComplete?: () => void
}

export interface SearchBoxProps {
  className?: string
  style?: React.CSSProperties
  id?: string
  opts?: AMap.AutoCompleteOptions
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChoose?: ({type, poi}: {type: 'choose'; poi: AMap.POI}) => void
  onComplete?: (result: AMap.AutoCompleteResult) => void
  onError?: (error: string) => void
  onSelect?: ({type, poi}: {type: 'select'; poi: AMap.POI}) => void
}

export interface TrafficLayerProps {
  opts?: AMap.TrafficOptions
  onComplete?: () => void
}
