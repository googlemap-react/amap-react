import React from 'react'
import 'jest-dom/extend-expect'
import loadjs from 'loadjs'
import 'react-testing-library/cleanup-after-each'
import {cleanup, render, wait, act} from 'react-testing-library'
import {AMapProvider, MapBox} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

describe('MapBox', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn')
    jest.spyOn(loadjs, 'reset')
  })

  afterEach(() => {
    cleanup()
    jest.restoreAllMocks()
  })

  it('does not render map if fetch failed', async () => {
    const {container} = render(
      <AMapProvider apiKey="INVALID_KEY">
        <MapBox />
      </AMapProvider>,
    )
    expect(container.innerHTML).toMatch('Loading...')
    await wait(() => {
      expect(console.warn).toHaveBeenCalledWith('Unable to fetch AMap sdk')
    })
    expect(loadjs.reset).toHaveBeenCalled()
    expect(container.innerHTML).toMatch('Loading...')
  })

  it('renders map after fetch succeeded', async () => {
    const {container, rerender} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
      </AMapProvider>,
    )
    expect(container.innerHTML).toMatch('Loading...')
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    expect(loadjs.reset).not.toHaveBeenCalled()
    act(() =>
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox
            opts={{
              center: {lat: 39, lng: 116},
              features: (['bd'] as unknown) as AMap.Feature[],
              labelzIndex: 120,
              lang: 'en',
              mapStyle: '',
              pitch: 15,
              rotation: 15,
              zoom: 10,
            }}
          />
        </AMapProvider>,
      ),
    )
  })
})
