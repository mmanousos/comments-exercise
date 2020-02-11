import React from 'react';
import Comment from './Comment';

const CommentsParent = (props) => {
  const replies = props.comment.replies.map(reply => <Comment key={reply.id} comment={reply} />)
  return (
    <div className="parent-comment">
      <Comment comment={props.comment} />

      <div className="replies">
        {replies}
        <a href="" className="show_more">Show More Replies ({props.comment.replies_count - 1})</a>
      </div>
    </div>
  );
};

export default CommentsParent;