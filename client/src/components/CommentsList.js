import React from "react";
import CommentsParent from "./CommentsParent";

const CommentsList = props => {
  return (
    <div className="comments">
      <h2>Comments (2)</h2>
      {props.comments.map(comment => (
        <CommentsParent
          key={comment.id}
          comment={comment}
          onMoreReplies={props.onMoreReplies}
        />
      ))}
    </div>
  );
};

export default CommentsList;
