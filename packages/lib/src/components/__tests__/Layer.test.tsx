import React from 'react'
import {act} from 'react-dom/test-utils'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, MapBox, Layer} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

describe('Layer', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container, rerender} = render(
      <AMapProvider>
        <MapBox apiKey="FAKE_KEY" />
        <Layer
          opts={{
            zooms: [3, 17],
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
          <Layer
            opts={{
              opacity: 0.6,
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
          <Layer
            opts={{
              opacity: 0.8,
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
          <Layer id="layer" />
          <Layer id="layer" />
        </AMapProvider>,
      )
      await wait(() => {
        expect(container.innerHTML).not.toMatch('Loading...')
      })
    }

    expect(check()).rejects.toEqual(new Error('The id has already been taken'))
  })
})
