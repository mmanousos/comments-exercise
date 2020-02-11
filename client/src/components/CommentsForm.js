import React, { Component } from "react";

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

  handleSubmit = e => {
    e.preventDefault();
    const comment = {
      author: this.state.author,
      body: this.state.body
    };

    this.props.onSubmit(comment);

    this.setState({
      author: "",
      body: ""
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
