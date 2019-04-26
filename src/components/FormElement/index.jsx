import React from 'react';
import { Button } from '../Button';
import { useDispatch } from 'redux-react-hook';

import types from '../../store/types';

export const FormElement = (props) => {
  const { user } = props;

  const [name, setName] = React.useState(user.name);
  const [phone, setPhone] = React.useState(user.phone);
  const [email, setEmail] = React.useState(user.email);
  const [website, setWebsite] = React.useState(user.website);

  React.useEffect(
    () => {
      setName(user.name);
      setPhone(user.phone);
      setEmail(user.email);
      setWebsite(user.website);
    },
    [user]
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: types.updateProfile,
      payload: { ...user, name, phone, email, website}
    });
  }

  if (!user) return null;

  return (
    <form className='form-element'>
      <label>
        Имя
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </label>
      <label>
        Телефон
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)}/>
      </label><label>
        Email
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
      </label><label>
        Сайт
        <input type="text" value={website} onChange={e => setWebsite(e.target.value)}/>
      </label>
      <Button onclick={handleClick}>
        <span>Сохранить</span>
      </Button>
    </form>
  );
};
