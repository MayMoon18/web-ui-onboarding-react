import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles/Welcome.css';

import welcomeImage from '../images/welcome-image.png';

function Welcome({ addName }) {
  const [valueName, setValueName] = useState('');
  let history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setValueName(e.target.value);
  };

  const capitalizeName = (name) => {
    return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasNumber = /\d/;
    const hasEspecialCharacter = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

    if (valueName !== '') {
      if (hasNumber.test(valueName) || hasEspecialCharacter.test(valueName)) {
        window.alert('You have to write a real name');
        setValueName('');
      } else {
        addName(capitalizeName(valueName));
        setValueName('');
        history.push('/imagine');
      }
    } else {
      window.alert('You have to write a name first');
    }
  };

  return (
    <div className='welcome-container'>
      <h1 className='title'>So excited to have you on board!</h1>
      <img src={welcomeImage} alt='Welcome' className='welcome-image' />

      <form onSubmit={handleSubmit}>
        <input
          className='input-name'
          type='text'
          name='name'
          placeholder='Your Name'
          onChange={handleChange}
          value={valueName}
        />
        <input className='button-save' type='submit' value='SAVE' />
      </form>
    </div>
  );
}

export default Welcome;
