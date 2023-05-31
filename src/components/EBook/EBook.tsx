import React, { useState } from 'react'
import { ReactReader } from 'react-reader'

export const EBook = () => {
  // And your own state logic to persist state
  const [location, setLocation] = useState('')
  const locationChanged = (epubcifi: any) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi as string)
  }
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        location={location as string}
        locationChanged={locationChanged}
        url="https://s3.amazonaws.com/moby-dick/moby-dick.epub"
      />
    </div>
  )
}
