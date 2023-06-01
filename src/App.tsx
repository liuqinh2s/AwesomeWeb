import "./App.css";
import React from "react";
import { Video } from "./components/Video/Video";
import { EBook } from "./components/EBook/EBook";
import {SimpleCard} from "./components/Card/SimpleCard";
import {VideoCard} from "./components/Card/VideoCard"
import {CategoryBar} from "./components/CategoryBar/CategoryBar"
import {video} from "./data"

export default function App() {

  return (
    <>
      <CategoryBar list={['视频', '电子书', '音乐', '图片']}></CategoryBar>
      {/* <VideoCard data={video[0]}></VideoCard> */}
      {/* <SimpleCard name={'刻在你心底的名字'} cover={"https://pic.rmb.bdstatic.com/bjh/4092b755ca751ae195a4f6635a041843.jpeg"} score={60}></SimpleCard> */}
      {/* <Video></Video>
      <EBook></EBook> */}
    </>
  );
}
