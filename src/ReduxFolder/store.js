import { createStore, combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

import math from './Reducers/mathReducer';
import user from './Reducers/userReducer';

export default createStore(
  combineReducers({ math, user }),
  {},
  applyMiddleware(createLogger(), thunk, createPromise())
);
