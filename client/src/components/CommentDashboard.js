import React, { Component } from "react";
import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";
// import commentsData from "../lib/comments";

class CommentDashboard extends Component {
  state = {
    comments: []
  };

  componentDidMount = () => {
    fetch("/api/comments")
      .then(response => {
        return response.json();
      })
      .then(commentsData => {
        this.setState({ comments: commentsData });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = comment => {
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then(response => response.json())
      .then(newComment => {
        this.setState(prevState => ({
          comments: prevState.comments.concat(newComment)
        }));
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  handleMoreReplies = commentId => {
    fetch(`/api/comment_replies?comment_id=${commentId}`)
      .then(response => {
        return response.json();
      })
      .then(replies => {
        const newComments = this.state.comments.map(comment => {
          if (comment.id === commentId) {
            return Object.assign({}, comment, {
              replies: comment.replies.concat(replies)
            });
          } else {
            return comment;
          }
        });

        this.setState({ comments: newComments });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <CommentsList
          comments={this.state.comments}
          onMoreReplies={this.handleMoreReplies}
        />
        <CommentsForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CommentDashboard;
