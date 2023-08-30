import { useState } from "react";
import { ReactReader } from "react-reader";
import {Epub} from "./EPUB"
import { PDFPreview } from "./PDF"

interface IEBook {
  source: string; // 资源地址
}

export const EBook = (props: IEBook) => {
  const { source } = props;
  function html(){
    if(source.endsWith('.epub')){
      return <Epub source={source}></Epub>
    }else if(source.endsWith('.pdf')){
      return <PDFPreview source={source}></PDFPreview>
    }
  }
  return html();
};
