import { Link } from "react-router-dom";

function NextVideoItems({ video, onClick }) {
    const handleClick = () => {
        onClick(video.id);
    };

    return (
        <div className="nextVideo__single" onClick={handleClick}>
            <Link to={`/videos/${video.id}`}>
                <div className="nextVideo__left">
                    <img className="nextVideo__single--img" src={video.image} alt={video.title} />
                </div>
                <div className="nextVideo__subContainer">
                    <h3 className="nextVideo__subContainer--title">{video.title}</h3>
                    <h3 className="nextVideo__subContainer--channel">{video.channel}</h3>
                </div>
            </Link>
        </div>
    );
}

export default NextVideoItems;
