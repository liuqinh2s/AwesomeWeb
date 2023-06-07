import React, { useEffect } from "react";
import Hls from "hls.js";

interface IVideo {
  source: string; // 播放地址
}

export const Video = (props: IVideo) => {
  const { source } = props;
  useEffect(() => {
    // 从replit添加一行注释
    const video = document.getElementById("video") as any;
    const videoSrc = source;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        // video.play();
        // video.download();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", function () {
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
};
