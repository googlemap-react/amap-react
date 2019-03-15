import React from 'react'
import {act} from 'react-dom/test-utils'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, MapBox, Marker} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

describe('Marker', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <Marker />
      </AMapProvider>,
    )
    expect(container.innerHTML).toMatch('Loading...')
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
  })

  it('updates options after rerender', async () => {
    const {container, rerender} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <Marker opts={{position: {lat: 39, lng: 116}}} />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() =>
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <Marker opts={{position: {lat: 39, lng: 116}, visible: false}} />
        </AMapProvider>,
      ),
    )
    act(() =>
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <Marker
            id="my-marker"
            opts={{
              icon: {
                image: 'https://placehold.it/350x150',
                imageOffset: {x: 0, y: 0},
                size: {width: 350, height: 150},
              },
              label: {content: 'test-label'},
              position: {lat: 39, lng: 116},
              title: 'test-title',
              visible: true,
              zIndex: 10,
            }}
          />
        </AMapProvider>,
      ),
    )
  })

  it('of same id cannot be added twice', async () => {
    const check = async () => {
      const {container} = render(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <Marker id="marker" />
          <Marker id="marker" />
        </AMapProvider>,
      )
      await wait(() => {
        expect(container.innerHTML).not.toMatch('Loading...')
      })
    }

    expect(check()).rejects.toEqual(new Error('The id has already been taken'))
  })

  it.concurrent('can have children', async () => {
    const {container, rerender} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <Marker>I am children</Marker>
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
  })
})
