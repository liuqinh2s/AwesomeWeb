import React from "react";
import "./ScoreStars.less";

interface IStars {
  score: number;  // 评分
}

export const Stars = (props: IStars) => {
  const {score} = props;
  const starx = ()=>{
    let x = score/2;
    const num1 = Math.floor(x/10);
    let num2 = Math.floor(x%10);
    // console.log(score, x, num1, num2)
    if(num2>0){
      num2 = 5;
    }
    x = (num1*10+num2);
    return 'star'+x;
  }
  return <>
    <span className={'star '+starx()}></span>
  </>
}