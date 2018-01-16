import { createAction } from 'redux-actions';  
  
export const REQUEST_ADD_ITEM = 'REQUEST_ADD_ITEM';
export const RECEIVE_ADD_ITEM = 'RECEIVE_ADD_ITEM';

export const requestAddItem = createAction(REQUEST_ADD_ITEM);
export const receiveAddItem = createAction(REQUEST_ADD_ITEM);