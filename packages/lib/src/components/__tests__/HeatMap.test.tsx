import React from 'react'
import {act} from 'react-dom/test-utils'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, MapBox, HeatMap} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

const HEAT_MAP_DATASET = {
  data: [
    {lng: 116.4, lat: 39.9, count: 10},
    {lng: 116.5, lat: 39.8, count: 8},
    {lng: 116.3, lat: 39.76, count: 10},
  ],
}

const HEAT_MAP_DATASET_NEW = {
  data: [
    {lng: 116.2, lat: 39.9, count: 5},
    {lng: 116.5, lat: 39.8, count: 8},
    {lng: 116.3, lat: 39.76, count: 10},
  ],
}

describe('HeatMap', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container, rerender} = render(
      <AMapProvider>
        <MapBox apiKey="FAKE_KEY" />
        <HeatMap
          opts={{
            dataset: HEAT_MAP_DATASET,
            radius: 230,
          }}
        />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() =>
      rerender(
        <AMapProvider>
          <MapBox apiKey="FAKE_KEY" />
          <HeatMap
            opts={{
              dataset: HEAT_MAP_DATASET_NEW,
              radius: 250,
              visible: false,
            }}
          />
        </AMapProvider>,
      ),
    )
    act(() =>
      rerender(
        <AMapProvider>
          <MapBox apiKey="FAKE_KEY" />
          <HeatMap
            opts={{
              dataset: HEAT_MAP_DATASET_NEW,
              radius: 250,
              visible: true,
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
          <HeatMap id="heatMap" />
          <HeatMap id="heatMap" />
        </AMapProvider>,
      )
      await wait(() => {
        expect(container.innerHTML).not.toMatch('Loading...')
      })
    }

    expect(check()).rejects.toEqual(new Error('The id has already been taken'))
  })
})
