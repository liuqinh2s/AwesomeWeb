import React, { useState } from "react";
import './CategoryBar.less';

interface ICategoryBar {
  list: string[];  // 分类列表
}

export const CategoryBar = (props: ICategoryBar) => {
  const { list } = props;
  const [index, setIndex] = useState(0);
  const li = () => {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      res.push(<li className={i === index ? 'active' : ''} onClick={() => {
        setIndex(i);
      }}>{list[i]}</li>)
    }
    return res;
  }
  return <>
    <ul className="category">
      {li()}
    </ul>
  </>
}