import React from 'react'
import {act} from 'react-dom/test-utils'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, MapBox, Polyline} from '../../../'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

describe('Polyline', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container, rerender} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <Polyline
          opts={{
            path: [{lng: 30, lat: 19}, {lng: 36, lat: 19}, {lng: 39, lat: 20}],
          }}
        />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() =>
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <Polyline
            opts={{
              path: [
                {lng: 31, lat: 19},
                {lng: 36, lat: 19},
                {lng: 39, lat: 20},
              ],
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
          <Polyline id="polyline" />
          <Polyline id="polyline" />
        </AMapProvider>,
      )
      await wait(() => {
        expect(container.innerHTML).not.toMatch('Loading...')
      })
    }

    expect(check()).rejects.toEqual(new Error('The id has already been taken'))
  })
})
