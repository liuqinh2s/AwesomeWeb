import React from "react";
import { StarsWithScore } from "../../widgets/ScoreStars/StarsWithScore";
import { useNavigate, useParams } from "react-router-dom";
import "./SimpleCard.less";

export interface ISimpleCard {
  id: string; // id
  name: string; // 名称
  cover: string; // 封面地址
  score: number; // 评分
}

export const SimpleCard = (props: ISimpleCard) => {
  const { id, name, cover, score } = props;
  const navigate = useNavigate();
  const param = useParams();
  const handleClick = () => {
    navigate("/" + (param.id || "video") + "/" + id);
  };
  return (
    <>
      <div className="simple-card">
        <img
          className="cover"
          src={cover}
          onClick={() => {
            handleClick();
          }}
        ></img>
        <div
          className="title"
          onClick={() => {
            handleClick();
          }}
        >
          {name}
        </div>
        <StarsWithScore score={score}></StarsWithScore>
      </div>
    </>
  );
};
