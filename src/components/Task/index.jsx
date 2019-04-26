import React from 'react';

export const Task = (props) => {
  const { task, user } = props;

  return (
    <li className={task.completed ? 'list-group-item' : 'list-group-item completed'}>
      <h5 className='mb-1'>
        {task.title}
      </h5>
      <small>
        {user && user.name}
      </small>
    </li>
  );
};
