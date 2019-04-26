import React from 'react';
import '../index.css';
import { useDispatch, useMappedState } from 'redux-react-hook';

import { Task } from '../../components/Task';
import types from '../../store/types';


const Tasks = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: types.getAllTasks,
    });
    // eslint-disable-next-line
  }, []);

  const mapState = React.useCallback(
    state => ({
      tasks: state.tasks,
      users: state.users,
    }),
    [],
  );

  const { tasks, users } = useMappedState(mapState);
  
  return (
    <>
      <h2>Все задачи</h2>
      <div className="container task-container">
        <ul className="list-group">
          {tasks && tasks.map((task, idx) => {
            const user = users.filter(_user => _user.id === task.userId)[0]
            return (
              <Task key={idx} task={task} user={user}/>
            )
          })}
        </ul>
      </div>
    </>
  );
};

export default Tasks;
