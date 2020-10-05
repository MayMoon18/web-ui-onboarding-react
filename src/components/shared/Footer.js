import React from 'react';
import { useHistory } from 'react-router-dom';

import './../styles/Footer.css';

function Footer(props) {
  let history = useHistory();

  const handleClick = (url) => {
    history.push(url);
  };

  return (
    <footer className='footer'>
      <button onClick={() => handleClick(props.backUrl)}>BACK</button>
      <button onClick={() => handleClick(props.nextUrl)}>NEXT</button>
    </footer>
  );
}

export default Footer;
