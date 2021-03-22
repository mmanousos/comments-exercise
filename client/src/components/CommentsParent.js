import React from "react";
import Comment from "./Comment";
import store from "../lib/store";

const CommentsParent = props => {
  let replies = store.getState().replies.filter(reply => {
    return reply.comment_id === props.comment.id;
  });

  replies = replies.map(reply => {
    return <Comment key={reply.id} comment={reply} />;
  });

  const handleMoreReplies = e => {
    e.preventDefault();
    const commentId = props.comment.id;

    fetch(`/api/comment_replies?comment_id=${commentId}`)
      .then(response => {
        return response.json();
      })
      .then(replies => {
        store.dispatch({
          type: "REPLIES_RECEIVED",
          payload: {
            replies: replies,
            commentId: commentId
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
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
