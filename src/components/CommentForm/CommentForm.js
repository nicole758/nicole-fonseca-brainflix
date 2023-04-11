import profilePic from "../../assets/images/Mohan-muruge.jpg";
import "./CommentForm.scss";

function CommentForm() {
    return (
        <form className="comment__container">
            <div className="comment__top">
                <img className="comment__top--avatar" src={profilePic} />
            </div>
            <div className="comment__container--main">
                <label className="comment__container--title">
                    JOIN THE CONVERSTATION
                    <textarea className="comment__container--input" placeholder="Add a new comment"></textarea>
                </label>
                <button className="comment__container--button">COMMENT</button>
            </div>
        </form>
    );
}

export default CommentForm;