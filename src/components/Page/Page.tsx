import React from "react";
import { ISimpleCard, SimpleCard } from '../Card/SimpleCard'
import './Page.less'

interface IPage {
  data: ISimpleCard[];
}

export const Page = (props: IPage) => {
  const { data } = props;
  const html = () => {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      res.push(
        <div className="card-wrap">
          <SimpleCard name={data[i].name} cover={data[i].cover} score={data[i].score}></SimpleCard></div>)
    }
    return res;
  }
  return <>
    <div className="page">
      {html()}
    </div>
  </>
}