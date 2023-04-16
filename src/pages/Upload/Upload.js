import publish from "../../assets/images/publish.svg";
function Upload() {
    return (
        <div>
            <h1>Upload Video</h1>
            <div>
                <h3>VIDEO THUMBNAIL</h3>
                <div></div>
                <label className="">
                    TITLE YOUR VIDEO
                    <textarea className="" placeholder="Add a title to your video"></textarea>
                </label>
                <label className="">
                    ADD A VIDEO DESCRIPTION
                    <textarea className="" placeholder="Add a description to your video"></textarea>
                </label>
                <button className="comment__container--button">
                    <img className="comment__container--button--img" src={publish} alt="comment button" />
                    <span className="comment__container--button--text">PUBLISH</span>
                </button>
        </div>
        </div>
    )
}

export default Upload