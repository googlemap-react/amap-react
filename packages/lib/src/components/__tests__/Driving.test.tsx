import React from 'react'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, Driving, MapBox, DRIVING_POLICY} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'
import {act} from 'react-dom/test-utils'

defineGlobalVariable()

describe('PlaceSearch', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be used without a map', async () => {
    const {container} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <Driving />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
  })

  it('can be used with a map', async () => {
    const {container, rerender} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <Driving points={[{keyword: '北京大学'}, {keyword: '清华大学'}]} />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() => {
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <Driving
            origin={{lng: 116.4, lat: 39.9}}
            destination={{lng: 116.5, lat: 39.8}}
            opts={{
              policy: DRIVING_POLICY.LEAST_DISTANCE,
              province: '京',
              number: 'A88888',
            }}
          />
        </AMapProvider>,
      )
    })
  })
})
