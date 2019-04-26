import types from '../types';

const initialState = window.__DATA__ ? window.__DATA__.tasks : [];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setAllTasks:
      return [
        ...state,
        ...action.payload,
      ];

    default:
      return state;
  }
};
