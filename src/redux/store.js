// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import entryReducer from './reducers/entryReducer';

const rootReducer = combineReducers({
  entries: entryReducer, // Combine all reducers here
});

const store = createStore(rootReducer);

export default store;
