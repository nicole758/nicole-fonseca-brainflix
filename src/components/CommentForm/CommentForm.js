import profilePic from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";
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
                </label>
                <div className="comment__container--flex">
                <textarea className="comment__container--input" placeholder="Add a new comment"></textarea>
                <button className="comment__container--button">
                    <img className="comment__container--button--img" src={commentIcon} alt="comment button" />
                    <span className="comment__container--button--text">COMMENT</span>
                </button>
                </div>
            </div>
        </form>
    );
}

export default CommentForm;