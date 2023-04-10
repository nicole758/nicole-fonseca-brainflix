import NextVideoItem from "../NextVideoItems/NextVideoItems";
import "./NextVideos.scss";
function NextVideos({clickHandler,videos}){
    return(
        <div className="nextVideos">
            <h2 className="nextVideos__header">Next Videos</h2>
            {
                videos.map(video => (
                    <NextVideoItem key={video.id} video={video} clickHandler={clickHandler} />
                ))
            }
        </div>
    )
}

export default NextVideos;