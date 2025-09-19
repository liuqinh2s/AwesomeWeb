import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoPage } from "./views/VideoPage/VideoPage";
import { BookPage } from "./views/BookPage/BookPage";
import { HomePage } from "./views/HomePage/HomePage";
import { MusicPage } from "./views/MusicPage/MusicPage";
import { GamePage } from "./views/GamePage/GamePage";
import { ENV_PATH } from "./config";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ENV_PATH+"/"} element={<HomePage></HomePage>} />
          <Route path={ENV_PATH+"/:id"} element={<HomePage></HomePage>} />
          <Route path={ENV_PATH+"/video/:id"} element={<VideoPage></VideoPage>} />
          <Route path={ENV_PATH+"/ebook/:id"} element={<BookPage></BookPage>} />
          <Route path={ENV_PATH+"/music"} element={<MusicPage></MusicPage>} />
          <Route path={ENV_PATH+"/game/:id"} element={<GamePage></GamePage>} />
        </Routes>
        {/* <VideoCard data={video[0]}></VideoCard> */}
        {/* <SimpleCard name={'刻在你心底的名字'} cover={"https://pic.rmb.bdstatic.com/bjh/4092b755ca751ae195a4f6635a041843.jpeg"} score={60}></SimpleCard> */}
        {/* <Video></Video>
      <EBook></EBook> */}
      </BrowserRouter>
    </>
  );
}
