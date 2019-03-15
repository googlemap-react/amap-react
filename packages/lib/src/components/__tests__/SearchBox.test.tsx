import React from 'react'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import {render, wait, cleanup, act} from 'react-testing-library'
import {AMapProvider, MapBox, SearchBox} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

describe('SearchBox', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container, rerender} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <SearchBox />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
    act(() => {
      rerender(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
          <SearchBox opts={{city: '北京市', cityLimit: true, type: 'all'}} />
        </AMapProvider>,
      )
    })
  })

  it('accepts string-type opts.input', async () => {
    const {container} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <SearchBox opts={{input: 'input'}} />
        <input id="input" />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
  })

  it('accepts HTMLInputElement-type opts.input', async () => {
    const input = document.createElement('input')
    const {container} = render(
      <AMapProvider apiKey="FAKE_KEY">
        <MapBox />
        <SearchBox opts={{input: input}} />
      </AMapProvider>,
    )
    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
  })
})
