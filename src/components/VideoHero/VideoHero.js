import image from "../../assets/images/poster.jpg"
import "./VideoHero.scss"


function VideoHero() {
    return (
        <video className= "hero__video" controls poster={image}>
        </video>
    )
}


export default VideoHero;