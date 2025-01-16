// src/redux/reducers/entryReducer.js
import { ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from '../types';

const initialState = [
  // Example entries to display initially
  { id: 1, name: 'Entry 1', description: 'This is the first entry.' },
  { id: 2, name: 'Entry 2', description: 'This is the second entry.' },
  { id: 3, name: 'vishal 3', description: 'This is the vishal 3 entry.' },
  { id: 3, name: 'vishal 3', description: 'hello i am vishal baraiya !! how are you ???.' },
];

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, action.payload];
    case UPDATE_ENTRY:
      return state.map((entry) =>
        entry.id === action.payload.id ? action.payload : entry
      );
    case DELETE_ENTRY:
      return state.filter((entry) => entry.id !== action.payload);
    default:
      return state;
  }
};

export default entryReducer;
