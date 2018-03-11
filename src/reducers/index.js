import { combineReducers } from 'redux';
import Posts from '../reducers/reducer_posts';;
const rootReducer = combineReducers({
  posts: Posts
});

export default rootReducer;
