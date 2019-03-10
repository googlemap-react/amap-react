declare namespace AMap {
  export class Map {
    constructor(container: string | HTMLDivElement, opts: MapOptions)
  }

  export interface MapOptions {
    lang: string
    zoom: number
    zooms: number[]
  }
}
