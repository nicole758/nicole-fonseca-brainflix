import view from "../../assets/images/views.svg";
import like from "../../assets/images/likes.svg";
import CommentForm from "../CommentForm/CommentForm";
import "./VideoDetails.scss";


function VideoDetails({ selectedVideo }) {
    const { title, channel, timestamp, views, likes, description,comments} = selectedVideo;

    return (
        <main className="selectedVideo--container">
            <h1 className="selectedVideo--title">{title}</h1>
            <div className="selectedVideo__subContainer">
                <div className="selectedVideo__subContainer--num-1">
                    <h3 className="selectedVideo__subContainer--channel">By {channel}</h3>
                    <h3 className="selectedVideo__subContainer--time">{new Date(timestamp).toLocaleDateString('en-US')}</h3>
                </div>
                <div className="selectedVideo__subContainer--num">
                    <div className="selectedVideo__subContainer--num-2">
                        <img className="selectedVideo__subContainer--img" src={view} />
                        <h3 className="selectedVideo__subContainer--count">{views}</h3>
                    </div>
                    <div className="selectedVideo__subContainer--num-3">
                        <img className="selectedVideo__subContainer--img" src={like} />
                        <h3 className="selectedVideo__subContainer--count">{likes}</h3>
                    </div>
                </div>
            </div>
            <h3 className="selectedVideo__description">{description}</h3>
            <h2 className="selectedVideo__commentlength">{comments.length} comments</h2>
            <CommentForm />
        </main>
    );
}
export default VideoDetails;