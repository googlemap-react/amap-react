export interface AMapAPIProps {
  apiKey: string
}

export interface AMapReducer {
  state: AMapState
  dispatch: React.Dispatch<AMapAction>
}

export interface AMapState {
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
  children: React.ReactNode
}

export interface InfoWindowOptions extends AMap.InfoWindowOptions {
  position?: AMap.LngLatLiteral
}

export interface InfoWindowProps {
  children?: React.ReactNode
  anchorId?: string
  opts?: InfoWindowOptions
  visible?: boolean
  onChange?: () => void
  onClose?: () => void
  onOpen?: () => void
}

export interface MapBoxOptions extends AMap.MapOptions {
  center?: AMap.LngLatLiteral
}

export interface MapBoxProps {
  apiKey: string
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

export interface PolygonOptions extends AMap.PolygonOptions {
  path?: AMap.LngLatLiteral[]
  pathWithHole?: AMap.LngLatLiteral[][]
}

export interface PolygonProps {
  id?: string
  opts?: PolygonOptions
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
