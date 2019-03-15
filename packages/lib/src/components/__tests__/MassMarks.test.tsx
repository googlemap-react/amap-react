import React from 'react'
import {act} from 'react-dom/test-utils'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup} from 'react-testing-library'
import {AMapProvider, MapBox, MassMarks} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

const MARKS_DATA = [
  {lng: 116.4, lat: 39.9, name: 'test-1', id: '1'},
  {lng: 116.0, lat: 39.9, name: 'test-2', id: '2'},
  {lng: 116.8, lat: 39.7, name: 'test-3', id: '3'},
]

const MARKS_DATA_NEW = [
  {lng: 116.1, lat: 39.9, name: 'test-1', id: '1'},
  {lng: 116.0, lat: 39.9, name: 'test-2', id: '2'},
  {lng: 116.8, lat: 39.7, name: 'test-3', id: '3'},
]

describe('MassMarks', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container, rerender} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <MassMarks
          opts={{
            data: MARKS_DATA,
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
          <MassMarks
            opts={{
              data: MARKS_DATA_NEW,
            }}
          />
        </AMapProvider>,
      ),
    )
    act(() =>
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <MassMarks
            opts={{
              data: MARKS_DATA,
              style: {
                anchor: {
                  x: 0,
                  y: 0,
                },
                size: {
                  width: 100,
                  height: 100,
                },
                url: 'https://placehold.it/100x100',
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
          <MassMarks id="massMarks" />
          <MassMarks id="massMarks" />
        </AMapProvider>,
      )
      await wait(() => {
        expect(container.innerHTML).not.toMatch('Loading...')
      })
    }

    expect(check()).rejects.toEqual(new Error('The id has already been taken'))
  })
})
