import React from 'react';
import './index.css';

export const Button = (props) => {
  const { onclick } = props;
  
  return (
    <div className='btn' onClick={onclick}>
      {props.children}
    </div>
  );
};
