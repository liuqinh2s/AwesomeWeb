import React from "react";
import {Video} from "../../interface";

interface ICard {
  name: string;  // 片名
  date: string;  // 日期
  cover: string;  // 封面
  score: number;  // 评分
  
}

export const Card = (props: ICard)=>{
  const {name, date, cover, score} = props;
  return <>
    <div>
      <img></img>
      <div>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  </>
}