import "./VideoHero.scss"
// import fullScreen from "../../assets/images/fullscreen.svg";
// import pause from "../../assets/images/pause.svg";
// import volumeUp from "../../assets/images/volume_up.svg"



function VideoHero({ selectedVideo }) {
    const { image, video} = selectedVideo;
    return (
        <section className="hero">
            <div className="hero__video">
                <video className="hero__video--image" controls poster={image}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </section>
    )

}


export default VideoHero;