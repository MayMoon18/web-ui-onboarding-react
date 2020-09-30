import React from 'react';
import { useHistory } from 'react-router-dom';

import './../styles/Footer.css';

function Footer() {
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <footer className='footer'>
      <button onClick={handleClick}>Back</button>
      <button>Next</button>
    </footer>
  );
}

export default Footer;
