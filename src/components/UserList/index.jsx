import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import types from '../../store/types';

export const UserList = (props) => {
  const { close } = props;

  const mapState = React.useCallback(
    state => ({
      users: state.users,
      profile: state.profile,
    }),
    [],
  );

  const dispatch = useDispatch();

  const { users } = useMappedState(mapState);

  const handleSelectUser = (user) => {
    dispatch({
      type: types.setProfile,
      payload: user
    });
    close();
  }

  return (
    <>
      {users.map(user => {
        return (
          <span
            onClick={() => handleSelectUser(user)}
            key={user.id}
            >
              {user.name}
          </span>
        )
      })}
    </>
  )
}