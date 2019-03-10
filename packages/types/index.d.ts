declare namespace AMap {
  export class ArrayBounds {
    constructor(bounds: Array<LngLat | Pixel>)
    bounds: Array<LngLat | Pixel>
    contains(point: LngLat | Pixel): boolean
  }

  export class Bounds {
    constructor(southWest: LngLat, northEast: LngLat)
    contains(point: LngLat): boolean
    getCenter(): LngLat
    getNorthEast(): LngLat
    getSouthWest(): LngLat
    toString(): string
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
      instance: Object,
      eventName: string,
      handler: Function,
      context?: Object,
    ): EventListener
    static addListenerOnce(
      instance: Object,
      eventName: string,
      handler: Function,
      context?: Object,
    ): EventListener
    static removeListener(listener: EventListener): void
    static trigger(instance: Object, eventName: string, extArgs?: Object): void
  }

  export declare type Feature = 'bg' | 'building' | 'point' | 'road'

  export class LngLat {
    constructor(lng: number, lat: Number, noAutofix: boolean)
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
  }

  export class Map {
    constructor(container: string | HTMLDivElement, opts?: MapOptions)
    add(overlays: Overlay[]): void
    addControl(obj: Object): void
    clearInfoWindow(): void
    clearLimitBounds(): void
    clearMap(): void
    containerToLngLat(pixel: Pixel): LngLat
    destroy(): void
    detailOnAMAP(obj: Object): void
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
    getZoom(): number
    lngLatToContainer(lngLat: LngLat): Pixel
    lnglatToPixel(lngLat: LngLat, zoom: number): Pixel
    panBy(x: number, y: number): void
    panTo(position: LngLat): void
    pixelToLngLat(pixel: Pixel, zoom: number): LngLat
    plugin(name: string | string[], callback: Function): void
    poiOnAMAP(obj: Object): void
    off(eventName: string, handler: Function, context?: Object): void
    on(eventName: string, handler: Function, context?: Object): void
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
    center?: LngLat
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
    pitch?: number
    pitchEnable?: boolean
    preloadMode?: boolean
    resizeEnable?: boolean
    rotateEnable?: boolean
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

  export declare type Mask = Array<PolygonLiteral | PolygonWithHoleLiteral>

  export declare type OverlayType = 'circle' | 'marker' | 'polyline' | 'polygon'

  export class Pixel {
    constructor(x: number, y: number)
    equals(pixel: Pixel): boolean
    getX(): number
    getY(): number
    toString(): string
  }

  export declare type PolygonLiteral = LngLatLiteral[]

  export declare type PolygonWithHoleLiteral = PolygonLiteral[]

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

  export class TileLayer {
    constructor(opts: TileLayerOptions)
    getTiles(): Array
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

  export declare type ViewMode = '2D' | '3D'
}
