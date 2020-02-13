import React from "react";
import CommentsParent from "./CommentsParent";
import store from "../lib/store";

class CommentsList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });

    fetch("/api/comments")
      .then(response => {
        return response.json();
      })
      .then(commentsData => {
        store.dispatch({
          type: "COMMENTS_RECEIVED",
          payload: {
            comments: commentsData
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="comments">
        <h2>Comments (2)</h2>
        {store.getState().comments.map(comment => (
          <CommentsParent key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }
}

export default CommentsList;
