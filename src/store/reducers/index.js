import { combineReducers } from 'redux';

import { tasksReducer } from './tasks';
import { usersReducer } from './users';
import { profileReducer } from './profile';

export default combineReducers({
  tasks: tasksReducer,
  users: usersReducer,
  profile: profileReducer,
});
