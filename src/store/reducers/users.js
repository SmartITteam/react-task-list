import types from '../types';

const initialState = window.__DATA__ ? window.__DATA__.users : [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setAllUsers:
      return [
        ...state,
        ...action.payload
      ];

    case types.updateUser:
      
      return [
        ...state.filter(user => user.id !== action.payload.id),
        action.payload
      ];

    default:
      return state;
  }
};
