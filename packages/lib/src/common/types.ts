export interface AMapAPIProps {
  apiKey: string
}

export interface AMapReducer {
  state: AMapState
  dispatch: React.Dispatch<AMapAction>
}

export interface AMapState {
  map?: AMap.Map
}

export interface AMapAction {
  type: string
  map?: AMap.Map
}

export interface AMapProviderProps {
  children: React.ReactNode
}

export interface MapBoxProps {
  apiKey: string
  className?: string
  opts?: AMap.MapOptions
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
