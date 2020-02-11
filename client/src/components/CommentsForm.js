import React from 'react';

const CommentsForm = () => {
  return (
    <form action="" onSubmit={this.handleSubmit}>
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label>Your Name</label>
        <input
          type="text"
          name="author"
          value=""
        />
      </div>

      <div className="input-group">
        <label>Your Comment</label>
        <textarea
          name="body"
          value=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentsForm;