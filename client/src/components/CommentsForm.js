import React, { Component } from "react";
import store from "../lib/store";

class CommentsForm extends Component {
  state = {
    author: "",
    body: ""
  };

  handleUserInput = e => {
    e.preventDefault();
    const inputName = e.target.name;

    this.setState({
      [inputName]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const comment = {
      author: this.state.author,
      body: this.state.body
    };

    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then(response => response.json())
      .then(newComment => {
        store.dispatch({
          type: "COMMENT_CREATED",
          payload: {
            comment: newComment
          }
        });

        this.setState({
          author: "",
          body: ""
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h2>Post a Comment</h2>
        <div className="input-group">
          <label>Your Name</label>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleUserInput}
          />
        </div>

        <div className="input-group">
          <label>Your Comment</label>
          <textarea
            name="body"
            value={this.state.body}
            cols="30"
            rows="10"
            onChange={this.handleUserInput}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CommentsForm;
