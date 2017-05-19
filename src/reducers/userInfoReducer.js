import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userInfo(state = initialState.userInfo, action) {
  debugger;
  switch (action.type) {
    case types.ADD_PERSONAL_INFO:

        return Object.assign({},state,{personalInfo:action.userInfo.personalInfo});

    default:
      return state;
  }
}
