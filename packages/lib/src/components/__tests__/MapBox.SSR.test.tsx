import React from 'react'
import {renderToString} from 'react-dom/server'
import {AMapProvider, MapBox} from '../../..'

describe('MapBox', () => {
  beforeEach(() => {
    delete (global as any).document
  })

  it('does not render map at server side', () => {
    expect(
      renderToString(
        <AMapProvider apiKey="FAKE_KEY">
          <MapBox />
        </AMapProvider>,
      ),
    ).not.toMatch('map')
  })
})
