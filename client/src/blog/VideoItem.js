import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className=""
    >
      <div className="content">
      <br/>
        <div>
        <h5>{video.title}</h5>
        <hr />

        </div>
      </div>
    </div>
  );
};

export default VideoItem;
