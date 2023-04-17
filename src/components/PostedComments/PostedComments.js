import "./PostedComments.scss";

function PostedComments({selectedVideo}){
    if (!selectedVideo) {
        return <div>Loading...</div>;
      }

    const {comments} = selectedVideo;
    return(
        <div className="comment--flex">
        {comments.map(comment =>
            <div key={comment.id} className="comment">
                <div className="comment__left">
                    <img className="comment__left--pic" />
                </div>
                <div className="comment__right">
                    <div className="comment__right--top">
                        <h3 className="comment__right--top--name">{comment.name}</h3>
                        <h3 className="comment__right--top--date">{new Date(comment.timestamp).toLocaleDateString('en-US')}</h3>
                    </div>
                    <h3 className="comment__right--description">{comment.comment}</h3>
                </div>
            </div>
        )}
        </div>
        
    )
}

export default PostedComments;