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
        <AMapProvider>
          <MapBox apiKey="FAKE_KEY" />
        </AMapProvider>,
      ),
    ).not.toMatch('map')
  })
})
