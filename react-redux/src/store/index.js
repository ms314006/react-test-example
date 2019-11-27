import { createStore, combineReducers } from 'redux';
import counter from '../reducer/counter';

export default createStore(combineReducers({ counter }));
