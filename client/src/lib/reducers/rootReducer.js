import { combineReducers } from 'redux';
import comments from './comments';
import replies from './replies';

const rootReducer = combineReducers({
  comments,
  replies,
});

export default rootReducer;