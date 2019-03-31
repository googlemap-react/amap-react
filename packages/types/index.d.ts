declare namespace AMap {
  export interface Alter {
    id: number
    name: string
  }

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

  export class Autocomplete extends MVCObject {
    constructor(opts: AutoCompleteOptions)
    search(
      keyword: string,
      callback: (status: string, result: string | AutoCompleteResult) => void,
    ): void
    setCity(city: string): void
    setCityLimit(cityLimit: boolean): void
    setType(type: string): void
  }

  export interface AutoCompleteOptions {
    city?: string
    citylimit?: boolean
    datatype?: 'all' | 'poi' | 'bus' | 'busline'
    input?: string | HTMLInputElement
    output?: string | HTMLDivElement
    outPutDirAuto?: boolean
    type?: string
  }

  export interface AutoCompleteResult {
    count: number
    info: string
    tips: Tip[]
  }

  export class BasicShape extends MVCObject {
    getBounds(): Bounds
    getExtData(): any
    getMap(): Map | null
    getOptions(): BasicShapeOptions
    hide(): void
    setExtData(extData: any): void
    setMap(map: Map | null): void
    setOptions(opts: BasicShapeOptions): void
    show(): void
  }

  export interface BasicShapeOptions {
    bubble?: boolean
    clickable?: boolean
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
    visible?: boolean
    zIndex?: number
  }

  export class BezierCurve extends BasicShape {
    constructor(opts: BezierCurveOptions)
    getLength(): number
    getOptions(): BezierCurveOptions
    getPath(): number[][] | number[][][]
    setOptions(opts: BezierCurveOptions): void
    setPath(path: number[][] | number[][][]): void
  }

  export interface BezierCurveOptions extends BasicShapeOptions {
    borderWeight?: number
    geodesic?: boolean
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

  export interface BoundsLiteral {
    southWest: LngLatLiteral
    northEast: LngLatLiteral
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

  export class Circle extends BasicShape {
    constructor(opts: CircleOptions)
    contains(point: LngLat): boolean
    getCenter(): LngLat
    getOptions(): CircleOptions
    setCenter(center: LngLat): void
    setOptions(opts: CircleOptions): void
  }

  export interface CircleOptions extends BasicShapeOptions {
    center?: LngLat | LngLatLiteral
    radius?: number
  }

  export interface City {
    city: string
    citycode: string
    district: string
    province: string
  }

  export interface CityInfo {
    adcode: string
    citycode: string
    count: number
    name: string
  }

  export interface District {
    adcode: string
    name: string
  }

  export interface DriveRoute {
    distance: number
    policy: string
    restriction: 0 | 1
    steps: DriveStep[]
    time: number
    tolls: number
    tolls_distance: number
  }

  export interface DriveStep {
    action: string
    assist_action: string
    cities?: ViaCity[]
    distance: number
    end_location: LngLat
    instruction: string
    orientation: string
    path: LngLat[]
    road: string
    start_location: LngLat
    time: number
    tmcs?: TMC[]
    toll_road: string
    tolls: number
    tolls_distance: number
  }

  export class Driving extends MVCObject {
    constructor(opts: DrivingOptions)
    clear(): void
    clearAvoidPolygons(): void
    clearAvoidRoad(): void
    getAvoidPolygons(): LngLat[][]
    getAvoidRoad(): string
    search(
      origin: LngLat,
      destination: LngLat,
      opts: {waypoints: LngLat[]},
      callback: (status: string, result: string | DrivingResult) => void,
    ): void
    search(
      points: Array<{keyword: string; city?: string}>,
      callback: (status: string, result: string | DrivingResult) => void,
    ): void
    searchOnAMAP({
      origin,
      originName,
      destination,
      destinationName,
    }: {
      origin: LngLat
      originName: string
      destination: LngLat
      destinationName: string
    }): void
    setAvoidPolygons(path: LngLat[][]): void
    setAvoidRoad(road: string): void
    setPolicy(policy: DrivingPolicy): void
    setProvinceAndNumber(province: string, number: string): void
  }

  export interface DrivingOptions {
    autoFitView?: boolean
    extensions?: 'all' | 'base'
    ferry?: number
    hideMarkers?: boolean
    isOutline?: boolean
    map?: Map
    number?: string
    outlineColor?: string
    panel?: string | HTMLElement
    policy?: DrivingPolicy
    province?: string
    showTraffic?: boolean
  }

  export enum DrivingPolicy {
    LEAST_TIME,
    LEAST_FEE,
    LEAST_DISTANCE,
    NOT_DEFINED,
    REAL_TRAFFIC,
  }

  export interface DrivingResult {
    destination: LngLat
    end: Poi
    info: string
    origin: LngLat
    routes: DriveRoute[]
    start: Poi
    taxi_cost?: number
    waypoints: Poi
  }

  export class Ellipse extends BasicShape {
    constructor(opts: EllipseOptions)
    contains(point: LngLat): boolean
    getCenter(): LngLat
    getOptions(): EllipseOptions
    setCenter(center: LngLat): void
    setOptions(opts: EllipseOptions): void
  }

  export interface EllipseOptions extends BasicShapeOptions {
    center?: LngLat | LngLatLiteral
    radius?: number[]
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

  export class Heatmap extends MVCObject {
    constructor(map: Map, opts: HeatmapOptions)
    addDataPoint(lng: number, lat: number, count: number): void
    getDataSet(): HeatmapDataset
    getMap(): Map
    getOptions(): HeatmapOptions
    hide(): void
    setDataSet(dataset: HeatmapDataset): void
    setMap(map: Map): void
    setOptions(opts: HeatmapOptions): void
    show(): void
  }

  export interface HeatmapColor {
    [interval: number]: string
  }

  export interface HeatmapData extends LngLatLiteral {
    count?: number
  }

  export interface HeatmapDataset {
    max?: number
    data: HeatmapData[] | string
    dataParser?: (rawData: Object) => HeatmapData[]
  }

  export interface HeatmapOptions {
    gradient?: HeatmapColor
    opacity?: number[]
    radius?: number
    zooms?: number[]
  }

  export class Icon extends MVCObject {
    constructor(opts: IconOptions)
    getImageSize(): Size
    setImageSize(size: Size): void
  }

  export interface IconLiteral {
    image: string
    imageOffset?: PixelLiteral
    imageSize?: SizeLiteral
    size: SizeLiteral
  }

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
    setMap(map: Map | null): void
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
    setMap(map: Map | null): void
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

  export interface MassMarkLiteral extends LngLatLiteral {
    style?: number
    [propName: string]: any
  }

  export interface MassMark {
    lnglat: number[]
    style?: number
    [propName: string]: any
  }

  export class MassMarks extends MVCObject {
    constructor(data: MassMark[], opts: MassMarksOptions)
    clear(): void
    getData(): MassMark[]
    getMap(): Map
    getStyle(): StyleObjectOptions | StyleObjectOptions[]
    hide(): void
    setData(data: MassMark[]): void
    setMap(map: Map): void
    setStyle(style: StyleObjectOptions | StyleObjectOptions[]): void
    show(): void
  }

  export interface MassMarksOptions {
    alwaysRender?: boolean
    cursor?: string
    opacity?: number
    style?:
      | StyleObjectOptions
      | StyleObjectOptions[]
      | StyleObjectOptionsLiteral
      | StyleObjectOptionsLiteral[]
    zIndex?: number
    zooms?: number[]
  }

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

  export class PlaceSearch extends MVCObject {
    constructor(opts: PlaceSearchOptions)
    clear(): void
    detailOnAMAP(obj: Object): void
    getDetails(
      PoiId: string,
      callback: (status: string, result: string | SearchResult) => void,
    ): void
    getLang(): string
    poiOnAMAP(obj: Object): void
    search(
      keyword: string,
      callback: (status: string, result: string | SearchResult) => void,
    ): void
    searchNearBy(
      keyword: string,
      center: LngLat,
      radius: number,
      callback: (status: string, result: string | SearchResult) => void,
    ): void
    searchInBounds(
      keyword: string,
      bounds: Bounds | Polygon,
      callback: (status: string, result: string | SearchResult) => void,
    ): void
    setCity(city: string): void
    setCityLimit(cityLimit: boolean): void
    setLang(lang: string): void
    setPageIndex(pageIndex: number): void
    setPageSize(pageSize: number): void
    setType(type: string): void
  }

  export interface PlaceSearchOptions {
    autoFitView?: boolean
    children?: number
    city?: string
    citylimit?: boolean
    extensions?: 'all' | 'base'
    lang?: 'zh_cn' | 'en'
    map?: Map
    pageIndex?: number
    pageSize?: number
    panel?: string | HTMLElement
    showCover?: boolean
    renderStyle?: 'newpc' | 'default'
    type?: string
  }

  function plugin(serviceNames: string[], callback: Function): void

  export interface Poi {
    adcode: string
    address?: string
    adname?: string
    citycode?: string
    cityname?: string
    district: string
    email?: string
    entr_location?: LngLat
    exit_location?: LngLat
    id: string
    location?: LngLat
    name: string
    pcode?: string
    pname?: string
    postcode?: string
    tel?: string
    typecode: string
    website?: string
  }

  export interface PoiList {
    count: number
    pageIndex: number
    pageSize: number
    pois: Poi[]
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

  export interface RailStop {
    adcode: number
    id: string
    location: LngLat
    name: string
    time: number
  }

  export interface RailwayDetails {
    alters?: Alter[]
    arrival_stop?: Rail_Stop
    depature_stop: Rail_Stop
    distance: number
    id: string
    name: string
    spaces: Space[]
    time: number
    trip: number
    type: string
    via_stops?: Via_Stop[]
  }

  export class Rectangle extends BasicShape {
    constructor(opts: RectangleOptions)
    contains(point: LngLat): boolean
    getOptions(): RectangleOptions
    setBounds(bounds: Bounds): void
    setOptions(opts: RectangleOptions): void
  }

  export interface RectangleOptions extends BasicShapeOptions {
    bounds?: Bounds | BoundsLiteral
  }

  class RoadNet extends TileLayer {
    constructor(opts: RoadNetOptions)
    setOpacity(alpha: number): void
  }

  export interface RoadNetOptions extends TileLayerOptions {}

  class Satellite extends TileLayer {
    constructor(opts: SatelliteOptions)
    setOpacity(alpha: number): void
  }

  export interface SatelliteOptions extends TileLayerOptions {}

  export interface SearchResult {
    cityList: CityInfo[]
    info: string
    keywordList: string[]
    poiList: PoiList
  }

  export interface Segment {
    distance: number
    instruction: string
    time: number
    transit_mode: 'BUS' | 'METRO_RAIL' | 'RAILWAY' | 'SUBWAY' | 'TAXI' | 'WALK'
    transit: RailwayDetails | TaxiDetails | TransitDetails | WalkDetails
  }

  export interface SelectChangeEvent {
    data: Poi
    id: string
    listElement: HTMLElement
    marker: Marker
    type: string
  }

  export interface Shop {
    building_id: string
    id: string
    lnglat: LngLat
    name: string
  }

  export class Size {
    constructor(width: number, height: number)
    getHeight(): number
    getWidth(): number
    toString(): string
  }

  export interface SizeLiteral {
    height: number
    width: number
  }

  export interface Space {
    cost: number
    type: number
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

  export interface Stop {
    id: string
    location: LngLat
    name: string
  }

  export interface StyleObjectOptions {
    anchor: Pixel
    rotation?: number
    size: Size
    url: string
  }

  export interface StyleObjectOptionsLiteral {
    anchor: PixelLiteral
    rotation?: number
    size: SizeLiteral
    url: string
  }

  export interface SubwayEntrance {
    location: LngLat
    name: string
  }

  export interface TaxiDetails {
    destination: LngLat
    distance: number
    origin: LngLat
    sname: string
    time: number
    tname: string
  }

  export class TileLayer extends MVCObject {
    constructor(opts: TileLayerOptions)
    getTiles(): string[]
    getZooms(): number[]
    hide(): void
    reload(): void
    setMap(map: Map | null): void
    setOpacity(opacity: number): void
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
    map?: Map
    opacity?: number
    tileSize?: number
    tileUrl?: string
    visible?: boolean
    zIndex?: number
    zooms?: number[]
  }

  export interface Tip {
    adcode: string
    district: string
    name: string
  }

  export interface TMC {
    distance: number
    lcode: string
    status: string
  }

  class Traffic extends TileLayer {
    constructor(opts: TrafficOptions)
    setOpacity(alpha: number): void
  }

  export interface TrafficOptions extends TileLayerOptions {
    autoRefresh?: boolean
    interval?: number
  }

  export class Transfer {
    constructor(opts: TransferOptions)
    clear(): void
    leatAt(time: string, data: string): void
    search(
      origin: LngLat,
      destination: LngLat,
      callback: (status: string, result: string | TransferResult) => void,
    ): void
    search(
      points: Array<{keyword: string; city?: string}>,
      callback: (status: string, result: string | TransferResult) => void,
    ): void
    searchOnAMAP({
      origin,
      originName,
      destination,
      destinationName,
    }: {
      origin: LngLat
      originName: string
      destination: LngLat
      destinationName: string
    }): void
    setCity(city: string): void
    setCityd(city: string): void
    setPolicy(policy: TransferPolicy): void
  }

  export interface TransferOptions {
    autoFitView?: boolean
    city?: string
    cityd?: string
    extensions?: 'all' | 'base'
    isOutline?: boolean
    hideMarkers?: boolean
    map?: Map
    nightflag?: boolean
    outlineColor?: string
    panel?: string | HTMLElement
    policy?: TransferPolicy
  }

  export interface TransferPlan {
    cost: number
    distance: number
    nightLine: boolean
    path: LngLat[]
    railway_distance: number
    segments: Segment[]
    taxi_distance: number
    time: number
    transit_distance: number
    walking_distance: number
  }

  export enum TransferPolicy {
    LEAST_TIME,
    LEAST_FEE,
    LEAST_TRANSFER,
    LEAST_WALK,
    MOST_COMFORT,
    NO_SUBWAY,
  }

  export interface TransferResult {
    destination: LngLat
    end: Poi
    info: string
    origin: LngLat
    plans: TransferPlan[]
    start: Poi
    taxi_cost: number
  }

  export interface TransitDetails {
    entrance: SubwayEntrance
    exit: SubwayEntrance
    lines: TransitLine[]
    on_station: Stop
    off_station: Stop
    path: LngLat[]
    via_num: number
    via_stops: Stop[]
  }

  export interface TransitLine {
    etime: string
    id: string
    name: string
    stime: string
    type: string
  }

  export interface ViaCity {
    adcode: string
    citycode: string
    districts: District[]
    name: string
  }

  export interface Via_Stop {
    id: string
    location: LngLat
    name: string
    time: number
    wait: number
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

  export interface WalkDetails {
    destination: LngLat
    origin: LngLat
    path: LngLat[]
    steps: WalkStep[]
  }

  export interface WalkStep {
    action: string
    assist_action: string
    distance: number
    instruction: string
    path: LngLat[]
    road: string
    time: number
  }
}
