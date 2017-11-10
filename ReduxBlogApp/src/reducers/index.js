import { combineReducers } from 'redux';
import PostsReducer from './reducer_post';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
