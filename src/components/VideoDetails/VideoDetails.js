import view from "../../assets/images/views.svg";
import like from "../../assets/images/likes.svg";



function VideoDetails({selectedVideo}){
    const {title,channel,timestamp,views,likes,description} = selectedVideo;
    return(
        <main className="selectedVideo--container">
            <h1 className="selectedVideo--title">{title}</h1>
            <div className="selectedVideo__subContainer">
            <h3 className="selectedVideo__subContainer--channel">By {channel}</h3>
            <h3 className="selectedVideo__subContainer--time">{timestamp}</h3>
            <div className="selectedVideo__viewContainer">
            <img src= {view} />
            <h3 className="selectedVideo__subContainer--views">{views}</h3>
            </div>
            <div className="selectedVideo__likeContainer">
            <img src= {like}/>
            <h3 className="selectedVideo__subContainer--likes">{likes}</h3>
            </div>
            </div>
            <p>{description}</p>
        </main>
    );
}
export default VideoDetails;