import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useMappedState } from 'redux-react-hook';
import types from '../../store/types';
import './index.css';

import { UserList } from '../../components/UserList';

export const Nav = () => {
  const [visible, setVisible] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: types.getAllUsers,
    });
    // eslint-disable-next-line
  }, []);

  const mapState = React.useCallback(
    state => ({
      profile: state.profile,
    }),
    [],
  );

  const { profile } = useMappedState(mapState);

  return (
    <header>
      <nav className='main-nav'>
			<div className='collapse navbar-collapse'>
				<ul className='navbar-nav mr-auto'>
					<li><NavLink exact to='/' activeClassName='active'>Все задачи</NavLink></li>
					<li><NavLink to='/profile' activeClassName='active'>Мои задачи</NavLink></li>
				</ul>
        <span 
          className='navbar-text'
          onClick={() => setVisible(!visible)}>
          {profile ? profile.name : 'select User'}
        </span>
        <div
          className={visible ? 'users-list' : 'users-list hidden'}
        >
        <UserList close={() => setVisible(false)}/>
        </div>
			</div>
		</nav>
    </header>
  );
};
