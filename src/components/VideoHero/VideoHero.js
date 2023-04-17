import "./VideoHero.scss";


function VideoHero({ selectedVideo }) {
    
    const { image, video } = selectedVideo;
    
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