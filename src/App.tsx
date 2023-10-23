import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoPage } from "./views/VideoPage/VideoPage";
import { BookPage } from "./views/BookPage/BookPage";
import { HomePage } from "./views/HomePage/HomePage";
import { MusicPage } from "./views/MusicPage/MusicPage";
import { GamePage } from "./views/GamePage/GamePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/:id" element={<HomePage></HomePage>} />
          <Route path="/video/:id" element={<VideoPage></VideoPage>} />
          <Route path="/ebook/:id" element={<BookPage></BookPage>} />
          <Route path="/music" element={<MusicPage></MusicPage>} />
          <Route path="/game/:id" element={<GamePage></GamePage>} />
        </Routes>
        {/* <VideoCard data={video[0]}></VideoCard> */}
        {/* <SimpleCard name={'刻在你心底的名字'} cover={"https://pic.rmb.bdstatic.com/bjh/4092b755ca751ae195a4f6635a041843.jpeg"} score={60}></SimpleCard> */}
        {/* <Video></Video>
      <EBook></EBook> */}
      </BrowserRouter>
    </>
  );
}
