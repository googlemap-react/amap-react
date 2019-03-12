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
  it('add an object without an object instance', () => {
    expect(() => {
      render(
        <AMapProvider>
          <ActionDispatcher action={{type: 'add_object'}} />
        </AMapProvider>,
      )
    }).toThrowError(new Error('You should specify an object instance'))
  })

  it('add an object without an id', () => {
    expect(() => {
      const marker = new AMap.Marker({position: {lat: 0, lng: 0}})
      render(
        <AMapProvider>
          <ActionDispatcher action={{type: 'add_object', object: marker}} />
        </AMapProvider>,
      )
    }).toThrowError(new Error('You should specify an id'))
  })

  it('use the same id more than once', () => {
    expect(() => {
      const marker = new AMap.Marker({position: {lat: 0, lng: 0}})
      render(
        <AMapProvider>
          <ActionDispatcher
            action={{type: 'add_object', object: marker, id: 'marker'}}
          />
          <ActionDispatcher
            action={{type: 'add_object', object: marker, id: 'marker'}}
          />
        </AMapProvider>,
      )
    }).toThrowError(new Error('The id has already been taken'))
  })

  it('remove an object without an id', () => {
    expect(() => {
      render(
        <AMapProvider>
          <ActionDispatcher action={{type: 'remove_object'}} />
        </AMapProvider>,
      )
    }).toThrowError(new Error('You should specify an id'))
  })

  it.concurrent('remove a non-existing object', async () => {
    console.error = jest.fn()
    expect(() => {
      render(
        <AMapProvider>
          <ActionDispatcher action={{type: 'remove_object', id: 'marker'}} />
        </AMapProvider>,
      )
    }).toThrowError(new Error('There is no object with the given id'))
  })
})

describe('The dispatcher will', () => {
  it.concurrent('add and remove an object', async () => {
    expect(() => {
      const marker = new AMap.Marker({position: {lat: 0, lng: 0}})
      render(
        <AMapProvider>
          <ActionDispatcher
            action={{type: 'add_object', object: marker, id: 'marker'}}
          />
          <ActionDispatcher action={{type: 'remove_object', id: 'marker'}} />
        </AMapProvider>,
      )
    }).not.toThrow()
  })
})
