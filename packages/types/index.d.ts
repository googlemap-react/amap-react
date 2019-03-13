declare namespace AMap {
  export type Anchor =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'middle-left'
    | 'center'
    | 'middle-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
  export type Animation =
    | 'AMAP_ANIMATION_BOUNCE'
    | 'AMAP_ANIMATION_DROP'
    | 'AMAP_ANIMATION_NONE'
  export class ArrayBounds {
    constructor(bounds: Array<LngLat | Pixel>)
    bounds: Array<LngLat | Pixel>
    contains(point: LngLat | Pixel): boolean
  }

  export class BasicShape extends MVCObject {
    constructor(opts: BasicShapeOptions) {}
    getBounds(): Bounds
    getExtData(): any
    getOptions(): BasicShapeOptions
    hide(): void
    setExtData(extData: any): void
    setOptions(opts: BasicShapeOptions): void
    show(): void
  }

  export interface BasicShapeOptions {
    bubble?: boolean
    cursor?: string
    draggable?: boolean
    extData?: any
    fillColor?: string
    fillOpacity?: number
    map?: Map
    strokeColor?: string
    strokeDasharray?: number[]
    strokeOpacity?: number
    strokeStyle?: 'solid' | 'dashed'
    strokeWeight?: number
    zIndex?: number
  }

  export class BezierCurve extends BasicShape {
    constructor(opts: BezierCurveOptions) {}
    getLength(): number
    getOptions(): BezierCurveOptions
    getPath(): number[][] | number[][][]
    setOptions(opts: BezierCurveOptions): void
    setPath(path: number[][] | number[][][]): void
  }

  export interface BezierCurveOptions extends BasicShapeOptions {
    borderWeight?: number
    isOutline?: boolean
    outlineColor?: string
    path?: number[][] | number[][][]
    showDir?: boolean
  }

  export class Bounds {
    constructor(southWest: LngLat, northEast: LngLat)
    contains(point: LngLat): boolean
    getCenter(): LngLat
    getNorthEast(): LngLat
    getSouthWest(): LngLat
    toString(): string
  }

  export interface Building {
    floor: number
    floor_details: {
      floor_indexes: number[]
      floor_names: string[]
      floor_nonas: string[]
    }
    id: string
    lnglat: LngLat
    name: string
  }

  export interface City {
    city: string
    citycode: string
    district: string
    province: string
  }

  export class event {
    static addDomListener(
      instance: HTMLElement,
      eventName: string,
      handler: Function,
      context?: Object,
    ): EventListener
    static addListener(
      instance: MVCObject,
      eventName: string,
      handler: Function,
      context?: Object,
    ): EventListener
    static addListenerOnce(
      instance: MVCObject,
      eventName: string,
      handler: Function,
      context?: Object,
    ): EventListener
    static removeListener(listener: EventListener): void
    static trigger(instance: Object, eventName: string, extArgs?: Object): void
  }

  export type Feature = 'bg' | 'building' | 'point' | 'road'

  export class Icon extends MVCObject {
    constructor(opts: IconOptions)
    getImageSize(): Size
    setImageSize(size: Size): void
  }

  export interface IconLiteral extends IconOptions {}

  export interface IconOptions {
    image: string
    imageOffset: Pixel
    imageSize: Size
    size: Size
  }

  export class IndoorMap extends MVCObject {
    constructor(opts: IndoorMapOptions)
    getOpacity(): number
    getSelectedBuilding(): Building
    getSelectedBuildingId(): string
    hide(): void
    hideFloorBar(): void
    hideLabels(): void
    setMap(map: Map): void
    setOpacity(opacity: number): void
    setzIndex(zIndex: number): void
    show(): void
    showFloor(floor: number, noMove?: boolean): void
    showFloorBar(): void
    showIndoorMap(indoorId: string, floor?: number, shopId?: string): void
    showLabels(): void
  }

  export interface IndoorMapOptions {
    alwaysShow: boolean
    cursor: string
    hideFloorBar: boolean
    opacity: number
    zIndex: number
  }

  export class InfoWindow extends MVCObject {
    constructor(opts: InfoWindowOptions)
    close(): void
    getAnchor(): Anchor
    getContent(): string | HTMLElement
    getIsOpen(): boolean
    getPosition(): LngLat
    getSize(): Size
    open(map: Map, position: LngLat): void
    setAnchor(anchor: Anchor): void
    setContent(content: string | HTMLElement): void
    setPosition(position: LngLat): void
    setSize(size: Size): void
  }

  export interface InfoWindowOptions {
    anchor?: Anchor
    autoMove?: boolean
    closeWhenClickMap?: boolean
    content?: string | HTMLElement
    isCustom?: boolean
    offset?: Pixel | PixelLiteral
    position?: LngLat | LngLatLiteral
    showShadow?: boolean
    size?: Size
  }

  export class LngLat {
    constructor(lng: number, lat: number, noAutofix?: boolean)
    distance(lngLat: LngLat | Array<LngLat>): number
    equals(lngLat: LngLat): boolean
    getLat(): number
    getLng(): number
    offset(w: number, s: number): LngLat
    toString(): string
  }

  export interface LngLatLiteral {
    lng: number
    lat: number
    noAutoFix?: boolean
  }

  export class Map extends MVCObject {
    constructor(container: string | HTMLDivElement, opts?: MapOptions)
    add(overlays: Overlay[]): void
    addControl(obj: Object): void
    clearInfoWindow(): void
    clearLimitBounds(): void
    clearMap(): void
    containerToLngLat(pixel: Pixel): LngLat
    destroy(): void
    detailOnAMAP(obj: Object): void
    geodeticCoordToLngLat(pixel: Pixel): LngLat
    getAllOverlays(overlayType?: OverlayType): Overlay[]
    getBounds(): Bounds
    getCenter(): LngLat
    getCity(callback: (result: City) => any): City
    getContainer(): HTMLDivElement
    getDefaultCursor(): string
    getFeatures(): Feature[]
    getLabelzIndex(): number
    getLang(): string
    getLayers(): TileLayer[]
    getLimitBounds(): Bounds
    getMapStyle(): string
    getPitch(): number
    getResolution(point?: LngLat): number
    getRotation(): number
    getScale(dpi: number): number
    getStatus(): Status
    getSize(): Size
    getViewMode_(): ViewMode
    getZoom(): number
    lngLatToContainer(lngLat: LngLat): Pixel
    lngLatToGeodeticCoord(lnglat: LngLat): Pixel
    lnglatToPixel(lngLat: LngLat, zoom: number): Pixel
    panBy(x: number, y: number): void
    panTo(position: LngLat): void
    pixelToLngLat(pixel: Pixel, zoom: number): LngLat
    plugin(name: string | string[], callback: Function): void
    poiOnAMAP(obj: Object): void
    remove(overlays: Overlay[]): void
    removeControl(obj: Object): void
    setBounds(bounds: Bounds): void
    setCenter(center: LngLat): void
    setCity(city: string, callback: Function): void
    setDefaultCursor(cursor: string): void
    setDefaultLayer(layer: TileLayer): void
    setFeatures(features: Feature[])
    setFitView(
      overlays: Overlay[] | null,
      immediately: boolean,
      avoid: number[],
      maxZoom: number,
    ): void
    setLabelzIndex(zIndex: number): void
    setLang(lang: string): void
    setLayers(layers: TileLayer[]): void
    setLimitBounds(limitBounds: Bounds): void
    setMapStyle(style: string): void
    setPitch(pitch: number): void
    setRotation(rotation: number): void
    setStatus(status: Status): void
    setZoom(zoom: number): void
    setZoomAndCenter(zoom: number, center: LngLat): void
    zoomIn(): void
    zoomOut(): void
  }

  export interface MapOptions {
    animateEnable?: boolean
    buildingAnimation?: boolean
    center?: LngLat | LngLatLiteral
    crs?: string
    defaultCursor?: string
    defaultLayer?: TileLayer
    doubleClickZoom?: boolean
    dragEnable?: boolean
    expandZoomRange?: boolean
    features?: Feature[]
    jogEnable?: boolean
    keyboardEnable?: boolean
    indoorMap?: IndoorMap
    isHotspot?: boolean
    labelzIndex?: number
    lang?: string
    layers?: TileLayer[]
    mapStyle?: string
    mask?: Mask
    maxPitch?: number
    pitch?: number
    pitchEnable?: boolean
    preloadMode?: boolean
    resizeEnable?: boolean
    rotateEnable?: boolean
    rotation?: number
    scrollWheel?: boolean
    showBuildingBlock?: boolean
    showIndoorMap?: boolean
    skyColor?: string
    touchZoom?: boolean
    touchZoomCenter?: number
    view?: View2D
    viewMode?: ViewMode
    zoom?: number
    zoomEnable?: boolean
    zooms?: number[]
  }

  export interface MapsEvent {
    lnglat: LngLat
    pixel: Pixel
    target: Object
    type: string
  }

  export interface MapsHotSpotEvent {
    id: string
    lnglat: LngLat
    name: string
    type: string
  }

  export class Marker extends MVCObject {
    constructor(opts: MarkerOptions)
    getAnchor(): Anchor
    getAngle(): number
    getAnimation(): Animation
    getClickable(): boolean
    getContent(): string | HTMLElement
    getDraggable(): boolean
    getExtData(): any
    getIcon(): string | Icon
    getLabel(): MarkerLabel
    getMap(): Map
    getOffset(): Pixel
    getPosition(): LngLat
    getShadow(): Icon
    getShape(): MarkerShape
    getTitle(): string
    getTop(): boolean
    getzIndex(): number
    hide(): void
    markOnAMAP(obj: Object): void
    moveAlong(
      path: LngLat[],
      speed: number,
      callback?: Function,
      circlable?: boolean,
    ): void
    moveTo(position: LngLat, speed: number, callback?: Function): void
    pauseMove(): void
    resumeMove(): void
    setAnchor(anchor: Anchor): void
    setAngle(angle: number): void
    setClickable(clickable: boolean): void
    setContent(content: string | HTMLElement): void
    setCursor(cursor: string): void
    setDraggable(draggable: boolean): void
    setExtData(extData: any): void
    setIcon(icon: string | Icon): void
    setLabel(label: MarkerLabel): void
    setMap(map: Map): void
    setOffset(offset: Pixel | PixelLiteral): void
    setPosition(position: LngLat): void
    setRaiseOnDrag(raiseOnDrag: boolean): void
    setShadow(icon: Icon): void
    setShape(shape: MarkerShape): void
    setTitle(title: string): void
    setTop(isTop: boolean): void
    setzIndex(zIndex: number): void
    show(): void
    stopMove(): void
  }

  export interface MarkerLabel {
    content?: string
    offset?: Pixel | PixelLiteral
  }

  export interface MarkerOptions {
    anchor?: Anchor
    angle?: number
    animation?: Animation
    autoRotation?: boolean
    bubble?: boolean
    clickable?: boolean
    content?: string | HTMLElement
    cursor?: string
    draggable?: boolean
    extData?: any
    icon?: string | Icon | IconLiteral
    label?: MarkerLabel
    map?: Map
    offset?: Pixel | PixelLiteral
    position?: LngLat | LngLatLiteral
    raiseOnDrag?: boolean
    shadow?: Icon
    shape?: MarkerShape
    title?: string
    topWhenClick?: boolean
    visible?: boolean
    zIndex?: number
  }

  export class MarkerShape extends MVCObject {
    constructor(opts: MarkerShapeOptions)
  }

  export interface MarkerShapeOptions {
    coords: number[]
    type: 'circle' | 'poly' | 'rect'
  }

  export type Mask = Array<LngLatLiteral[] | LngLatLiteral[][]>

  export class MVCObject {
    off(eventName: string, handler: Function, context?: Object): void
    on(eventName: string, handler: Function, context?: Object): void
  }

  export type Overlay = TileLayer | Marker

  export type OverlayType = 'circle' | 'marker' | 'polyline' | 'polygon'

  export class Pixel {
    constructor(x: number, y: number)
    equals(pixel: Pixel): boolean
    getX(): number
    getY(): number
    toString(): string
  }

  export interface PixelLiteral {
    x: number
    y: number
  }

  export class Polygon extends BasicShape {
    constructor(opts: PolygonOptions)
    contains(point: LngLat): boolean
    getArea(): number
    getOptions(): PolygonOptions
    getPath(): LngLat[] | LngLat[][]
    setOptions(opts: PolygonOptions): void
    setPath(path: LngLat[] | LngLat[][]): void
  }

  export interface PolygonOptions extends BasicShapeOptions {
    path?: LngLat[] | LngLatLiteral[] | LngLat[][]
  }

  export class Polyline extends BasicShape {
    constructor(opts: PolylineOptions)
    getLength(): number
    getOptions(): PolylineOptions
    getPath(): LngLat[]
    setOptions(opts: PolylineOptions): void
    setPath(path: LngLat[]): void
  }

  export interface PolylineOptions extends BasicShapeOptions {
    borderWeight?: number
    geodesic?: boolean
    isOutline?: boolean
    lineCap?: 'butt' | 'round' | 'square'
    lineJoin?: 'miter' | 'round' | 'bevel'
    outlineColor?: string
    path?: LngLat[] | LngLatLiteral[]
    showDir?: boolean
  }

  export interface Shop {
    building_id: string
    id: string
    lnglat: LngLat
    name: string
  }

  class RoadNet extends TileLayer {
    constructor(opts: RoadNetOptions)
    setOpacity(alpha: number): void
  }

  export interface RoadNetOptions {
    detectRetina?: boolean
    map: Map
    opacity?: number
    zIndex?: number
    zooms?: number[]
  }

  class Satellite extends TileLayer {
    constructor(opts: SatelliteOptions)
    setOpacity(alpha: number): void
  }

  export interface SatelliteOptions {
    detectRetina?: boolean
    map: Map
    opacity?: number
    zIndex?: number
    zooms?: number[]
  }

  export class Size {
    constructor(width: number, height: number)
    getWidth(): number
    getHeight(): number
    toString(): string
  }

  export interface Status {
    animateEnable?: boolean
    doubleClickZoom?: boolean
    dragEnable?: boolean
    isHotspot?: boolean
    jogEnable?: boolean
    keyboardEnable?: boolean
    pitchEnable?: boolean
    resizeEnable?: boolean
    rotateEnable?: boolean
    scrollWheel?: boolean
    touchZoom?: boolean
    zoomEnable?: boolean
  }

  export class TileLayer extends MVCObject {
    constructor(opts: TileLayerOptions)
    getTiles(): string[]
    getZooms(): number[]
    hide(): void
    reload(): void
    setMap(map: Map): void
    setTileUrl(tileUrl: string): void
    setzIndex(zIndex: number): void
    show(): void
    RoadNet: RoadNet
    Satellite: Satellite
    Traffic: Traffic
  }

  export interface TileLayerOptions {
    detectRetina?: boolean
    errorUrl?: string
    getTileUrl?: string | Function
    map: Map
    opacity?: number
    tileSize?: number
    tileUrl?: string
    zIndex?: number
    zooms?: number[]
  }

  class Traffic extends TileLayer {
    constructor(opts: TrafficOptions)
    setOpacity(alpha: number): void
  }

  export interface TrafficOptions {
    autoRefresh?: boolean
    detectRetina?: boolean
    map: Map
    interval?: number
    opacity?: number
    zIndex?: number
    zooms?: number[]
  }

  export class View2D {
    constructor(opts: View2DOptions)
  }

  export interface View2DOptions {
    center?: LngLat
    rotation?: number
    zoom?: number
  }

  export type ViewMode = '2D' | '3D'
}
