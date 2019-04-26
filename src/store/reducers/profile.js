import types from '../types';

const initialState = null;

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setProfile:
      return action.payload;
    
    case types.updateProfile:
      return action.payload;

    default:
      return state;
  }
};
