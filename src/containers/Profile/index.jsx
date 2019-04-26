import React from 'react';

import { useDispatch, useMappedState } from 'redux-react-hook';

import { Task } from '../../components/Task';
import { Button } from '../../components/Button'
import { FormElement} from '../../components/FormElement'
import { StaticElement } from '../../components/StaticElement'

import types from '../../store/types';
import '../index.css';

const Profile = () => {
  const [editMode, setEditMode] = React.useState(false);

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
      profile: state.profile,
    }),
    [],
  );

  const handleClick = () => {
    setEditMode(!editMode)
  }

  const { tasks, profile } = useMappedState(mapState);
  
  return (
    <article className='profile'>
      {profile && <h2>Задачи {profile.name}</h2>}
      {profile
      ? <div className="container profile-container">
          <section>
            {editMode
              ? <FormElement user={profile}/>
              : <StaticElement user={profile}/>}
            <Button onclick={handleClick}>
              <span>{!editMode ? 'Редактировать' : 'Назад'}</span>
            </Button>
          </section>
          <section>
              <ul className="list-group">
              {tasks && tasks.filter(task => profile.id === task.userId).map((task, idx) => {
                return (
                  <Task key={idx} task={task} user={profile}/>
                )
              })}
            </ul>
          </section>
        </div>
      : <h2>Выберите пользователя</h2> 
      }
    </article>
    
  );
};

export default Profile;
