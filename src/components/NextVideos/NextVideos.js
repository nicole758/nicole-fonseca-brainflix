import { Link } from "react-router-dom";
import './NextVideos.scss';

function NextVideos({ videos }) {
    return (
        <div className="nextVideo">
            <h4 className="nextVideo__title">Next Videos</h4>
            <div className="next-videos__list">
                {videos.map((video) => (
                    <Link key={video.id} to={`/videos/${video.id}`} className="nextVideo__item">
                        <div className="nextVideo__left">
                            <img className="nextVideo__single--img" src={video.image} alt={video.title} />
                        </div>
                        <div className="nextVideo__subContainer">
                            <h3 className="nextVideo__subContainer--title">{video.title}</h3>
                            <p className="nextVideo__subContainer--channel">{video.channel}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NextVideos;