import React, { useState } from 'react'
import { ReactReader } from 'react-reader'
import { useParams } from 'react-router-dom';
import { book } from "../../data";

export const EBook = () => {
  const param = useParams() || {};
  // And your own state logic to persist state
  const [location, setLocation] = useState(null)
  const locationChanged = (epubcifi: any) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi as string)
  }
  console.log(param, book)
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        location={location as string}
        locationChanged={locationChanged}
        url={book[(param.id || 0) as number].source}
      />
    </div>
  )
}
