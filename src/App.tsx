import "./App.css";
import Hls from "hls.js";
import React from "react";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // 从replit添加一行注释
    const video = document.getElementById("video") as any;
    const videoSrc =
      "https://vip.lzcdn2.com/20220318/37_8786d09c/1200k/hls/mixed.m3u8";
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        // video.play();
        // video.download();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", function() {
        // video.play();
      });
    }
  });
  return (
    <>
      <video
        controls
        autoPlay={false}
        style={{ width: "100%" }}
        id="video"
      ></video>
    </>
  );
}
