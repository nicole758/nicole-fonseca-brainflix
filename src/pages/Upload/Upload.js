import publish from "../../assets/images/publish.svg";
import pic from "../../assets/images/Upload-video-preview.jpg"
import "./Upload.scss";

function Upload() {
    function handleUpload() {
        window.alert("Upload was successful!");
        window.location.href = '/videos/84e96018-4022-434e-80bf-000ce4cd12b8';

    }
    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__left">
                    <h3 className="upload__label">VIDEO THUMBNAIL</h3>
                    <img className="upload__picture" src={pic}></img>
                </div>
                <div className="upload__right">
                    <label className="upload__label">
                        TITLE YOUR VIDEO
                    </label>
                    <textarea className="upload__input input1" placeholder="Add a title to your video"></textarea>
                    <label className="upload__label">
                        ADD A VIDEO DESCRIPTION
                    </label>
                    <textarea className="upload__input input2" placeholder="Add a description to your video"></textarea>
                    <div className="upload__buttons">
                        <button className="upload__button" onClick={handleUpload}>
                            <img className="upload__button--img" src={publish} alt="comment button" />
                            <span className="upload__button--text">PUBLISH</span>
                        </button>
                        <button className="upload__cancel">
                            <span className="upload__cancel--text"> CANCEL </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Upload