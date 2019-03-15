import React from 'react'
import {act} from 'react-dom/test-utils'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, InfoWindow, MapBox, Marker} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

describe('InfoWindow', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container, rerender} = render(
      <AMapProvider>
        <MapBox apiKey="FAKE_KEY" />
        <InfoWindow />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() =>
      rerender(
        <AMapProvider>
          <MapBox apiKey="FAKE_KEY" />
          <Marker id="marker" />
          <InfoWindow
            opts={{
              position: {lat: 39, lng: 116},
              visible: true,
              zIndex: 10,
            }}
            anchorId="marker"
          />
        </AMapProvider>,
      ),
    )
    act(() =>
      rerender(
        <AMapProvider>
          <MapBox apiKey="FAKE_KEY" />
          <Marker id="marker" />
          <InfoWindow
            opts={{
              content: 'This is an info window',
              position: {lat: 38, lng: 116},
              visible: false,
            }}
            anchorId="marker"
          />
        </AMapProvider>,
      ),
    )
  })

  it('can have children', async () => {
    const {container} = render(
      <AMapProvider>
        <MapBox apiKey="FAKE_KEY" />
        <InfoWindow opts={{visible: true}}>I am children</InfoWindow>
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
  })
})
