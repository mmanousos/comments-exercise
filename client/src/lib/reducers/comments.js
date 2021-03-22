const comments = (state=[], action) => {
  switch(action.type) {
    case 'COMMENTS_RECEIVED':
      const commentsWithoutReplies = action.payload.comments.reduce((accumulator, comment) => {
        const { replies, ...commentWithoutReplies } = comment;

        return accumulator.concat(commentWithoutReplies);
      }, []);

      return state.concat(commentsWithoutReplies);

    case 'COMMENT_CREATED':
      return state.concat(action.payload.comment);
  }

  return state;
};

export default comments;