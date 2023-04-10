import view from "../../assets/images/views.svg";
import like from "../../assets/images/likes.svg";
import Comments from "../Comments/Comments"
import "./VideoDetails.scss";


function VideoDetails({ selectedVideo }) {
    const { title, channel, timestamp, views, likes, description, comments } = selectedVideo;

    return (
        <main className="selectedVideo--container">
            <h1 className="selectedVideo--title">{title}</h1>
            <div className="selectedVideo__subContainer">
                <h3 className="selectedVideo__subContainer--channel">By {channel}</h3>
                <h3 className="selectedVideo__subContainer--time">{timestamp}</h3>
                <div className="selectedVideo__viewContainer">
                    <img src={view} />
                    <h3 className="selectedVideo__subContainer--views">{views}</h3>
                </div>
                <div className="selectedVideo__likeContainer">
                    <img src={like} />
                    <h3 className="selectedVideo__subContainer--likes">{likes}</h3>
                </div>
            </div>
            <p>{description}</p>
            <Comments />
            {comments.map(comment =>
                <div className="selectedVideo__comment--container">
                    <div className="selectedVideo__comment--left">
                        <img className="selectedVideo__comment--pic" />
                    </div>
                    <div className="selectedVideo__comment--right">
                    <div className="selectedVideo__comment--top">
                        <h3>{comment.name}</h3>
                        <h3>{new Date(comment.timestamp).toLocaleDateString('en-US')}</h3>
                    </div>
                    <h3>{comment.comment}</h3>
                    </div>
                </div>
            )}
        </main>
    );
}
export default VideoDetails;