const AMAP_LATEST_VERSION = '1.4.13'

export const AMAP_BASE_URI = `https://webapi.amap.com/maps?v=${AMAP_LATEST_VERSION}&key=`

export const DEFAULT_RADIUS = 1000

export enum DRIVING_POLICY {
  LEAST_TIME,
  LEAST_FEE,
  LEAST_DISTANCE,
  NOT_DEFINED,
  REAL_TRAFFIC,
}
