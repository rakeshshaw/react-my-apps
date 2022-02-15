import React from "react";
import "./VideoItem.css";

//------Using Class component------------
class VideoItem extends React.Component {
    render() {
        return(
            <div onClick={()=>this.props.onVideoSelect(this.props.video)} className="video-item item">
                <img className="ui image" alt={this.props.video.snippet.title} src={this.props.video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
            </div>
        );
    }
}

//------Using Funcional component------------

// const VideoItem = ({ video, onVideoSelect }) => {
//   return (
//     <div onClick={() => onVideoSelect(video)} className="video-item item">
//       <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
//       <div className="content">
//         <div className="header">{video.snippet.title}</div>
//       </div>
//     </div>
//   );
// };

export default VideoItem;
