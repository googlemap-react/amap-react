import React, {useReducer} from 'react'
import {
  AMapAction,
  AMapProviderProps,
  AMapReducer,
  AMapState,
} from '../common/types'

const initialState = (): AMapState => ({
  map: undefined,
})

const AMapContext = React.createContext<AMapReducer>({
  state: (undefined as unknown) as AMapState,
  dispatch: (undefined as unknown) as React.Dispatch<AMapAction>,
})

const reducer = (state: AMapState, action: AMapAction) => {
  switch (action.type) {
    case 'reset':
      return initialState()

    case 'init_map':
      if (action.map === undefined)
        throw new Error('You should specify a map instance')
      if (state.map !== undefined)
        throw new Error('There can only be one map instance in a context')

      return {...state, map: action.map}

    // case 'add_object':
    //   if (action.object === undefined)
    //     throw new Error('You should specify an object instance')
    //   if (action.id === undefined) throw new Error('You should specify an id')
    //   if (state.objects.has(action.id))
    //     throw new Error('The id has already been taken')
    //   state.objects.set(action.id, action.object)

    //   return state

    // case 'remove_object':
    //   if (action.id === undefined) throw new Error('You should specify an id')
    //   const objectToRemove = state.objects.get(action.id)
    //   if (objectToRemove === undefined)
    //     throw new Error('There is no object with the given id')

    //   // If the object can setMap, then setMap to null
    //   if ((objectToRemove as AMapObjectWithSetMap).setMap)
    //     (objectToRemove as AMapObjectWithSetMap).setMap(null)
    //   state.objects.delete(action.id)

    //   return state

    default:
      return state
  }
}

const AMapProvider = ({children}: AMapProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState())
  const value = {state, dispatch}

  return (
    <>
      <AMapContext.Provider value={value}>{children}</AMapContext.Provider>
    </>
  )
}

const AMapConsumer = AMapContext.Consumer

export {AMapContext, AMapProvider, AMapConsumer}
