import React from 'react';

export const StaticElement = (props) => {
  const { user } = props
  return (
   <div className='static-element'>
     <p>{user.name}</p>
     <p>{user.phone}</p>
     <p>{user.email}</p>
     <p>
       <a style={{paddingLeft: '0'}} target='blank' href={`https://${user.website}`}>
        <span>{user.website}</span>
       </a>
      </p>
   </div>
  );
};
