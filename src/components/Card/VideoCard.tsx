import React from "react";
import { Video } from "../../interface";
import { StarsWithScore } from "../../widgets/ScoreStars/StarsWithScore"
import './VideoCard.less'

interface IVideoCard {
  data: Video;  // 数据
}

export const VideoCard = (props: IVideoCard) => {
  const { data } = props;
  const { cover, name, score, details } = data;
  const { date, directors, actors, types, region, alias, intro } = details;
  const getShowData = (data: string | string[])=>{
    if(Array.isArray(data)){
      return data.join(' / ');
    }
    return data;
  }
  return <>
    <div className='video-card'>
      <img style={{width: '40%', display: 'block', paddingRight: '10px' }} src={cover}></img>
      <div className="info">
        <div>
          <h1 className="title">{name}</h1>
          <span className="date">{` (${date})`}</span>
          <StarsWithScore score={score}></StarsWithScore>
        </div>
        <div className="property">
          <span className="key">{'导演 : '}</span>
          <span className="value">{getShowData(directors)}</span>
        </div>
        <div className="property">
          <span className="key">{'主演 : '}</span>
          <span className="value">{getShowData(actors)}</span>
        </div>
        <div className="property">
          <span className="key">{'类型: '}</span>
          <span className="value">{getShowData(types)}</span>
        </div>
        <div className="property">
          <span className="key">{'制片国家/地区 : '}</span>
          <span className="value">{getShowData(region)}</span>
        </div>
        <div className="property">
          <span className="key">{'又名 : '}</span>
          <span className="value">{getShowData(alias)}</span>
        </div>
        <div className="property">
          <span className="key">{'简介 : '}</span>
          <span className="value">{intro}</span>
        </div>
      </div>
    </div>
  </>
}