import React from "react";
import { VideoCard } from '../../components/Card/VideoCard'
import { Video } from "../../components/Video/Video";
import { video } from "../../data";
import { useParams } from 'react-router-dom';

export const VideoPage = () => {
  const param = useParams();
  return <>
    <VideoCard data={video[param.id]}></VideoCard>
    <Video source={video[param.id].source}></Video>
  </>
}