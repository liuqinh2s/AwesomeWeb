import React, { useEffect, useState } from "react";
import ePub from "epubjs";


export const EBook = () => {
  let book;
  let rendition;
  useEffect(() => {
    book = ePub("https://s3.amazonaws.com/moby-dick/moby-dick.epub");
    rendition = book.renderTo("ebook-area", { width: "100%", height: "400" });
    rendition.display();
  })
  return <>
    <div id="ebook-area"></div>
    <a id="prev" href="#prev" className="arrow" onClick={()=>{
     book.package.metadata.direction === "rtl" ? rendition.next() : rendition.prev();
      e.preventDefault();
    }}>‹</a>
    <a id="next" href="#next" className="arrow">›</a>
  </>
}