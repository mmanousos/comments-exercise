const replies = (state=[], action) => {
  switch(action.type) {
    case 'COMMENTS_RECEIVED':
      const replies = action.payload.comments.reduce((accumulator, comment) => {
        const { replies, ...commentWithoutReplies } = comment;

        return accumulator.concat(replies);
      }, []);

      return state.concat(replies);
    case 'REPLIES_RECEIVED':
      return state.concat(action.payload.replies);
  }

  return state;
};

export default replies;