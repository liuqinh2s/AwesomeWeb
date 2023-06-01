import React from "react";
import { StarsWithScore } from '../../widgets/ScoreStars/StarsWithScore'

interface ISimpleCard {
  name: string;  // 名称
  cover: string;  // 封面地址
  score: number;  // 评分
}

export const SimpleCard = (props: ISimpleCard) => {
  const { name, cover, score } = props;
  return <>
    <StarsWithScore score={30}></StarsWithScore>
  </>
}