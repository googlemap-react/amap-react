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
