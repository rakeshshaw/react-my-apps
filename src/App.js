import React, { useEffect, useState } from "react";
// import youtube from "./apis/youtube";
import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Search/Search";
// import Clock from "./components/Clock/Clock";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import useVideos from "./hooks/useVideos";

//------Using Class component------------
// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.keywordSubmitHandler('travel');
//   }

//   keywordSubmitHandler = async (keyword) => {
//     // console.log(keyword);
//     const response = await youtube.get("/search", {
//       params: {
//         q: keyword,
//       },
//     });
//     this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
//   };

//   onVideoSelect = (video) => {
//     // console.log('from App ', video);
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onKeywordSubmit={this.keywordSubmitHandler} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// //------Using Functional component------------
// const App = () => {
//   const [videos, setVideo] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     keywordSubmitHandler("travel");
//   }, []);

//   const keywordSubmitHandler = async (keyword) => {
//     // console.log(keyword);
//     const response = await youtube.get("/search", {
//       params: {
//         q: keyword,
//       },
//     });
//     setVideo(response.data.items);
//     setSelectedVideo(response.data.items[0]);
//   };

//   const onVideoSelect = (video) => {
//     // console.log('from App ', video);
//     setSelectedVideo(video);
//   };

//   return (
//     <div className="ui container">
//       <SearchBar onKeywordSubmit={keywordSubmitHandler} />
//       <div className="ui grid">
//         <div className="ui row">
//           <div className="eleven wide column">
//             <VideoDetail video={selectedVideo} />
//           </div>
//           <div className="five wide column">
//             <VideoList onVideoSelect={onVideoSelect} videos={videos} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

//------Using custom hooks and functional component------------
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("travel");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onKeywordSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

// const items = [
//   {
//     title: "What is React?",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien dui, ultricies id purus sit amet, dictum scelerisque arcu. Cras dignissim facilisis nisl. Nunc dictum accumsan nulla id ultrices. Suspendisse dictum aliquam neque. Proin magna nunc, ornare quis eros eget, ornare malesuada eros. Phasellus eros mi, ullamcorper imperdiet venenatis quis, lobortis a ante. Pellentesque massa nisi, commodo non ligula vel, tempus sagittis sem. Duis ipsum lacus, tris",
//   },
//   {
//     title: "How do you rate React?",
//     content:
//       "lla id ultrices. Suspendisse dictum aliquam neque. Proin magna nunc, ornare quis eros eget, ornare malesuada eros. Phasellus eros mi, ullamcorper imperdiet venenatis quis, lobortis a ante. Pellentesque massa nisi, commodo non ligula vel, tempus sagittis sem. Duis ipsum lacus, tristique vel imperdiet sed, facilisis iaculis turpis. Duis a sapien finibus, pulvinar nulla eget, consequat libero. In hac habitasse platea dictumst.",
//   },
//   {
//     title: "Describe features of React",
//     content:
//       "lalesuada eros. Phasellus eros mi, ullamcorper imperdiet venenatis quis, lobortis a ante. Pellentesque massa nisi",
//   },
// ];

// //create react component
// const App = () => {
//   return (
//     <React.Fragment>
//       {/* <Accordion items={items} /> */}
//       <Search />
//     </React.Fragment>
//   );
// };

export default App;
