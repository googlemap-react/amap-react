import React from 'react'
import {AMapProvider} from '../AMapContext'
import 'react-testing-library/cleanup-after-each'
import {render, cleanup} from 'react-testing-library'
import {defineGlobalVariable, ActionDispatcher} from '../../__test__helpers__'

defineGlobalVariable()

afterEach(() => {
  cleanup()
})

describe('The dispatcher throws an error when trying to', () => {
  it('init map without a map instance', () => {
    expect(() => {
      render(
        <AMapProvider>
          <ActionDispatcher action={{type: 'init_map'}} />
        </AMapProvider>,
      )
    }).toThrowError(new Error('You should specify a map instance'))
  })

  it('add more than one map to one context', () => {
    expect(() => {
      const map = new AMap.Map(document.createElement('div'), {zoom: 14})
      render(
        <AMapProvider>
          <ActionDispatcher action={{type: 'init_map', map: map}} />
          <ActionDispatcher action={{type: 'init_map', map: map}} />
        </AMapProvider>,
      )
    }).toThrowError(
      new Error('There can only be one map instance in a context'),
    )
  })
})

describe('The dispatcher will', () => {
  it('reset the map', () => {
    expect(() => {
      const marker = new AMap.Marker({position: {lat: 0, lng: 0}})
      render(
        <AMapProvider>
          <ActionDispatcher
            action={{type: 'add_object', object: marker, id: 'marker'}}
          />
          <ActionDispatcher action={{type: 'reset'}} />
        </AMapProvider>,
      )
    }).not.toThrow()
  })

  it('ignore undefined action types', () => {
    expect(() => {
      render(
        <AMapProvider>
          <ActionDispatcher action={{type: 'undefined'}} />
        </AMapProvider>,
      )
    }).not.toThrow()
  })
})
