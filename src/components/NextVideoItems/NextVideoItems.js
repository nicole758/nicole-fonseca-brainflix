import "./NextVideoItems.scss";

function NextVideoItems({clickHandler,video}){
    return(
        <div className= "nextVideo__single" onClick={() => clickHandler(video.id)}>
            <img className="nextVideo__single--img"src={video.image}/>
            <div className="nextVideo__subContainer">
            <h3 className="nextVideo__subContainer--title">{video.title}</h3>
            <h3 className="nextVideo__subContainer--channel">{video.channel}</h3>
            </div>
        </div>
    )

}
export default NextVideoItems;