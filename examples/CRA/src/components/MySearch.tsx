import React, {useContext, useState} from 'react'
import {AMapContext, PlaceSearch, SearchBox} from '../lib'

const MySearch = () => {
  const {state} = useContext(AMapContext)
  const [keyword, setKeyword] = useState('')
  return (
    <>
      <SearchBox
        onChange={event => setKeyword(event.target.value)}
        onSelect={({type, poi}) => setKeyword(poi.name)}
      />
      <PlaceSearch
        keyword={keyword}
        opts={{
          panel: 'output',
        }}
      />
      <div id="output" />
    </>
  )
}

MySearch.displayName = MySearch

export default MySearch
