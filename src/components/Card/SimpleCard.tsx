import React from "react";
import { StarsWithScore } from '../../widgets/ScoreStars/StarsWithScore';
import './SimpleCard.less';

export interface ISimpleCard {
  name: string;  // 名称
  cover: string;  // 封面地址
  score: number;  // 评分
}

export const SimpleCard = (props: ISimpleCard) => {
  const { name, cover, score } = props;
  return <>
    <div className="simple-card">
       <img style={{display: 'block'}} src={cover}></img>
      <div>{name}</div>
      <StarsWithScore score={score}></StarsWithScore>
    </div>
  </>
}