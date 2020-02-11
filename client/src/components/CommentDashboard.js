import React, { Component } from 'react';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';
import commentsData from '../lib/comments';

class CommentDashboard extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.setState({
      comments: commentsData,
    });
  }

  render() {
    return (
      <div>
        <CommentsList
          comments={this.state.comments}
        />
        <CommentsForm />
      </div>
    );
  }
}

export default CommentDashboard;
