import publish from "../../assets/images/publish.svg";
import pic from "../../assets/images/Upload-video-preview.jpg"
import "./Upload.scss";
import axios from 'axios';
import { useState, useRef } from "react";

function Upload() {
    const formRef = useRef(null);

    const handleUpload = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const newVideo = {
            "title": formData.get("title"),
            "description": formData.get("description"),
            "image" : "http://localhost:8080/public-images/image9.jpg"
        }
        axios
            .post("http://localhost:8080/videos", newVideo)
            .then((response) => {
                console.log(response.data);
                window.alert("Upload was successful!");
                window.location.href = '/videos/84e96018-4022-434e-80bf-000ce4cd12b8';
            })
            .catch((error) => {
                console.log(error);
                window.alert("Error uploading video.");
            });
    };

    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <form className="upload__container" ref={formRef} encType="multipart/form-data">
                <div className="upload__left">
                    <h3 className="upload__label">VIDEO THUMBNAIL</h3>
                    <img className="upload__picture" src={pic} alt="Video thumbnail" />
                </div>
                <div className="upload__right">
                    <label className="upload__label">
                        TITLE YOUR VIDEO
                    </label>
                    <textarea
                        className="upload__input input1"
                        name="title"
                        placeholder="Add a title to your video"
                        type="text"
                    ></textarea>
                    <label className="upload__label">
                        ADD A VIDEO DESCRIPTION
                    </label>
                    <textarea
                        className="upload__input input2"
                        name="description"
                        placeholder="Add a description to your video"
                        type="text"
                    ></textarea>
                    <div className="upload__buttons">
                        <button className="upload__button" onClick={handleUpload}>
                            <img className="upload__button--img" src={publish} alt="Publish button" />
                            <span className="upload__button--text">PUBLISH</span>
                        </button>
                        <button className="upload__cancel">
                            <span className="upload__cancel--text">CANCEL</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Upload;
