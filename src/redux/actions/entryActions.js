// src/redux/actions/entryActions.js
import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from '../types';

// Action to add a new entry
export const addEntry = (entry) => ({
  type: ADD_ENTRY,
  payload: entry,
});

// Action to update an existing entry
export const updateEntry = (entry) => ({
  type: UPDATE_ENTRY,
  payload: entry,
});

// Action to delete an entry
export const deleteEntry = (id) => ({
  type: DELETE_ENTRY,
  payload: id,
});
