import {Epub} from "./EPUB"

interface IEBook {
  source: string; // 资源地址
}

export const EBook = (props: IEBook) => {
  const { source } = props;
  function html(){
    // if(source.endsWith('.epub')){
    //   return <Epub source={source}></Epub>
    // }else if(source.endsWith('.pdf')){
    //   window.open(`https://${document.location.host}`+source)
    //   return <></>
    // } else {
    //   return <></>
    // }
    return <Epub source={source}></Epub>
    // return <></>
  }
  return html();
};
