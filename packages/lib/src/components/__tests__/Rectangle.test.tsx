import React from 'react'
import {act} from 'react-dom/test-utils'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, MapBox, Rectangle} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

describe('Rectangle', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container, rerender} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <Rectangle />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() =>
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <Rectangle
            opts={{
              bounds: {
                southWest: {lng: 116.3, lat: 36.3},
                northEast: {lng: 116.5, lat: 36.5},
              },
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
          <Rectangle id="rectangle" />
          <Rectangle id="rectangle" />
        </AMapProvider>,
      )
      await wait(() => {
        expect(container.innerHTML).not.toMatch('Loading...')
      })
    }

    expect(check()).rejects.toEqual(new Error('The id has already been taken'))
  })
})
