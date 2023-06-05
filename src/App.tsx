import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Video } from "./components/Video/Video";
import { EBook } from "./components/EBook/EBook";
import { SimpleCard } from "./components/Card/SimpleCard";
import { VideoCard } from "./components/Card/VideoCard"
import { CategoryBar } from "./components/CategoryBar/CategoryBar";
import { VideoPage } from './views/VideoPage/VideoPage'
import { HomePage } from './views/HomePage/HomePage'


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/:id" element={<HomePage></HomePage>} />
          <Route path="/video/:id" element={<VideoPage></VideoPage>} />
          <Route path="/ebook/:id" element={<EBook></EBook>} />
        </Routes>
        {/* <VideoCard data={video[0]}></VideoCard> */}
        {/* <SimpleCard name={'刻在你心底的名字'} cover={"https://pic.rmb.bdstatic.com/bjh/4092b755ca751ae195a4f6635a041843.jpeg"} score={60}></SimpleCard> */}
        {/* <Video></Video>
      <EBook></EBook> */}
      </BrowserRouter>
    </>
  );
}
