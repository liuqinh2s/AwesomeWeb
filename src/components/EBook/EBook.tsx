import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { useParams } from "react-router-dom";
import { book } from "../../data";

interface IEBook {
  source: string; // 资源地址
}

export const EBook = (props: IEBook) => {
  const { source } = props;
  // And your own state logic to persist state
  const [location, setLocation] = useState('');
  const locationChanged = (epubcifi: string) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
  };
  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        url={source}
      />
    </div>
  );
};
