import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pageNumber(state = initialState.pageNumber, action) {
  debugger;
  switch (action.type) {

    case types.UPDATE_PAGE_NUMBER:
      return ++state;

    default:
      return state;
  }
}
