import React from "react";
import VideoItem from "../VideoItem/VideoItem";

//------Using Class component------------
class VideoList extends React.Component {
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.videos.map((video) => {
          // console.log(video);
          return <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video} />;
        })}
      </div>
    );
  }
}

//------Using Funcional component------------

// const VideoList = ({ videos, onVideoSelect }) => {
//   const renderedList = videos.map((video) => {
//     // console.log(video);
//     return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
//   });

//   return <div className="ui relaxed divided list"> {renderedList}</div>;
// };

export default VideoList;
