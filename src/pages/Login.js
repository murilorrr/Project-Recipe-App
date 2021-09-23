import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Input from '../components/loginInput';
import Button from '../components/buttonInput';
import { saveToken, saveEmail } from '../localStorage/localStorageSaves';

function Login(props) {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lockInput, setLockInput] = useState('disabled');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'email') return setEmail(value);
    if (name === 'password') return setPassword(value);
  };

  const validateLogin = (email, pass) => {
    const MaxPassLength = 6;

    const validadeEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const validatePass = pass.length > MaxPassLength;
    return (validadeEmail && validatePass);
  };

  useEffect(() => {
    if (validateLogin(Email, password)) {
      setLockInput('');
    } else { setLockInput('disabled'); }
  }, [Email, password]);

  const onClick = () => {
    const { history } = props;

    saveToken('mealsToken');
    saveToken('cocktailsToken');
    saveEmail(Email);

    history.push('/comidas');
  };

  return (
    <div>
      <Input
        name="email"
        value={ Email }
        type="text"
        onChange={ handleChange }
      />
      <Input
        name="password"
        value={ password }
        type="password"
        onChange={ handleChange }
      />
      <Button
        disabled={ lockInput }
        onClick={ onClick }
      />
    </div>);
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
