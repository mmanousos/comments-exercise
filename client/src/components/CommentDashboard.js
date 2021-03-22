import React from "react";
import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";
// import commentsData from "../lib/comments";

const CommentDashboard = () => {
  return (
    <div>
      <CommentsList />
      <CommentsForm />
    </div>
  );
};

export default CommentDashboard;
