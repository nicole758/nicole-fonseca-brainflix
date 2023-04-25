import VideoHero from "../../components/VideoHero/VideoHero"
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import { useState, useEffect } from "react";
import NextVideos from "../../components/NextVideos/NextVideos";
import PostedComments from "../../components/PostedComments/PostedComments";
import "./Home.scss";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Home() {
    const { videoId } = useParams();
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    let defaultVideoId = null;
    if (videos.length > 0) {
        defaultVideoId = videos[0].id;
    }

    let videoIdToDisplay = videoId || defaultVideoId;
    const filteredVideos = videos.filter(video => video.id !== videoIdToDisplay);

    useEffect(() => {
        axios.get(`http://localhost:8080/videos/`)
            .then(response => {
                setVideos(response.data);
            })
    }, [])

    useEffect(() => {
        if (videoIdToDisplay === null) {
            return;
        }
        axios.get(`http://localhost:8080/videos/${videoIdToDisplay}`)
            .then(response => {
                setSelectedVideo(response.data);
            })
    }, [videoIdToDisplay])

    useEffect(() => {
        if (videoIdToDisplay === null || selectedVideo?.id === videoIdToDisplay) {
            return;
        }
        axios.get(`http://localhost:8080/videos/${videoIdToDisplay}`)
            .then(response => {
                setSelectedVideo(response.data);
            })
    }, [videoIdToDisplay, selectedVideo])

    if (selectedVideo === null) {
        return <div>Loading!!!</div>
    }

    return (
        <>
            <VideoHero selectedVideo={selectedVideo} />
            <div className="main">
                <div className="main__main">
                    <VideoDetails selectedVideo={selectedVideo} />
                    <PostedComments selectedVideo={selectedVideo} />
                </div>
                <div className="main__sub">
                <NextVideos videos={filteredVideos}/>
                </div>
            </div>
        </>
    );
}

export default Home;