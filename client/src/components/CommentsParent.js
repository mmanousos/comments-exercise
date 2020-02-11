import React from "react";
import Comment from "./Comment";

const CommentsParent = props => {
  const replies = props.comment.replies.map(reply => (
    <Comment key={reply.id} comment={reply} />
  ));
  const handleMoreReplies = e => {
    e.preventDefault();
    props.onMoreReplies(props.comment.id);
  };

  return (
    <div className="parent-comment">
      <Comment comment={props.comment} />

      <div className="replies">
        {replies}
        {props.comment.replies_count !== replies.length ? (
          <a href="" className="show_more" onClick={handleMoreReplies}>
            Show More Replies ({props.comment.replies_count - 1})
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default CommentsParent;
