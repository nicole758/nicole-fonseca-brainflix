import VideoHero from "../../components/VideoHero/VideoHero"
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import videos from "../../data/videos.json";
import { useState } from "react";
import videoDetails from "../../data/video-details.json";
import NextVideos from "../../components/NextVideos/NextVideos";
import PostedComments from "../../components/PostedComments/PostedComments";

function Home() {
    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

    const videoClick = (videoId) => {
        const foundVideo = videoDetails.find(video => video.id === videoId)
        setSelectedVideo(foundVideo);
    }

    const filteredVideos = videos.filter(video => video.id !== selectedVideo.id);

    return (
        <>
            <VideoHero selectedVideo={selectedVideo} />
            <VideoDetails selectedVideo={selectedVideo} />
            <PostedComments selectedVideo={selectedVideo} />
            <NextVideos clickHandler={videoClick} videos={filteredVideos} />
        </>
    );
}

export default Home