import Header from "./components/Header/Header";
import './App.css';
import VideoHero from "./components/VideoHero/VideoHero";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import videos from "./data/videos.json";
import { useState } from "react";
import videoDetails from "./data/video-details.json"
import NextVideos from "./components/NextVideos/NextVideos"


function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  const videoClick = (videoId) => {
    const foundVideo = videoDetails.find(video => video.id === videoId)
    setSelectedVideo(foundVideo);
  }

  const filteredVideos = videos.filter(video => video.id !== selectedVideo.id);
  return (
    <div className="App">
      <Header />
      <VideoHero />
      <VideoDetails selectedVideo={selectedVideo}/>
      <NextVideos clickHandler={videoClick} videos={filteredVideos} />
    </div>
  );
}

export default App;
