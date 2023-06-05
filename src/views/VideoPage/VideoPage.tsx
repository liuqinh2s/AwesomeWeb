import React from "react";
import { VideoCard } from '../../components/Card/VideoCard'
import { Video } from "../../components/Video/Video";
import { video, category } from "../../data";
import { useParams } from 'react-router-dom';
import { CategoryBar } from "../../components/CategoryBar/CategoryBar";

export const VideoPage = () => {
  const param = useParams() || {};
  return <>
    <CategoryBar list={category} index={0}></CategoryBar>
    <VideoCard data={video[(param.id || 0) as number] as any}></VideoCard>
    <Video source={video[(param.id || 0) as number].source}></Video>
  </>
}