import React from 'react'
import {act} from 'react-dom/test-utils'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, MapBox, BezierCurve} from '../../../'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

describe('BezierCurve', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container, rerender} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <BezierCurve />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() =>
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <BezierCurve
            opts={{
              path: [[[116, 4, 39.9]], [[0, 0], [36.2, 39.7]]],
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
          <BezierCurve id="bezierCurve" />
          <BezierCurve id="bezierCurve" />
        </AMapProvider>,
      )
      await wait(() => {
        expect(container.innerHTML).not.toMatch('Loading...')
      })
    }

    expect(check()).rejects.toEqual(new Error('The id has already been taken'))
  })
})
