import { combineReducers } from 'redux';
import Author from '../reducers/test_reducer';
const rootReducer = combineReducers({
  author: Author
});

export default rootReducer;
