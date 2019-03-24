import React from 'react'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, MapBox, PlaceSearch} from '../../..'
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
        <PlaceSearch />
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
        <PlaceSearch keyword="Shop" />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() => {
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <PlaceSearch
            keyword="Shop"
            opts={{
              lang: 'en',
              pageIndex: 2,
            }}
          />
        </AMapProvider>,
      )
    })
  })
})
