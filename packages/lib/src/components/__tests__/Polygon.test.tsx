import React from 'react'
import {act} from 'react-dom/test-utils'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, MapBox, Polygon} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

const PATH_WITH_HOLE: AMap.LngLatLiteral[][] = [
  [
    {lng: 116.4, lat: 39.9},
    {lng: 116.5, lat: 39.9},
    {lng: 116.5, lat: 39.8},
    {lng: 116.4, lat: 39.8},
  ],
  [
    {lng: 116.45, lat: 39.89},
    {lng: 116.48, lat: 39.89},
    {lng: 116.48, lat: 39.81},
    {lng: 116.45, lat: 39.81},
  ],
  [
    {lng: 116.41, lat: 39.89},
    {lng: 116.42, lat: 39.89},
    {lng: 116.42, lat: 39.81},
    {lng: 116.41, lat: 39.81},
  ],
]

describe('Polygon', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container, rerender} = render(
      <AMapProvider>
        <MapBox apiKey="FAKE_KEY" />
        <Polygon />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() =>
      rerender(
        <AMapProvider>
          <MapBox apiKey="FAKE_KEY" />
          <Polygon
            opts={{
              path: [
                {lng: 31, lat: 18},
                {lng: 36, lat: 19},
                {lng: 39, lat: 20},
              ],
            }}
          />
        </AMapProvider>,
      ),
    )
    act(() =>
      rerender(
        <AMapProvider>
          <MapBox apiKey="FAKE_KEY" />
          <Polygon
            opts={{
              pathWithHole: PATH_WITH_HOLE,
            }}
          />
        </AMapProvider>,
      ),
    )
  })

  it('of same id cannot be added twice', async () => {
    const check = async () => {
      const {container} = render(
        <AMapProvider>
          <MapBox apiKey="FAKE_KEY" />
          <Polygon id="polygon" />
          <Polygon id="polygon" />
        </AMapProvider>,
      )
      await wait(() => {
        expect(container.innerHTML).not.toMatch('Loading...')
      })
    }

    expect(check()).rejects.toEqual(new Error('The id has already been taken'))
  })
})
