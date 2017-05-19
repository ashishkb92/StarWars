import { combineReducers } from 'redux';
import pageNumber from './pageNumberReducer';
import userInfo from './userInfoReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  pageNumber,
  userInfo
});

export default rootReducer;
