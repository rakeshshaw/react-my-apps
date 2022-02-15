import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchKeyword) => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    search(defaultSearchKeyword);
  }, []);

  const search = async (keyword) => {
    // console.log(keyword);
    const response = await youtube.get("/search", {
      params: {
        q: keyword,
      },
    });
    setVideo(response.data.items);
    // setSelectedVideo(response.data.items[0]);
  };

  // return [videos, keywordSubmitHandler];
  // changed the name keywordSubmitHandler to search for simplicity
  return [videos, search];
};

export default useVideos;
