import React from "react";
import "./ScoreStars.less";

interface IStars {
  score: number;  // 评分
}

export const Stars = (props: IStars) => {
  const {score} = props;
  const starx = 'star'+score/2;
  return <>
    <span className={'star '+starx}></span>
  </>
}