import React from 'react';
import { useHistory } from 'react-router-dom';

import './../styles/Footer.css';

function Footer(props) {
  let history = useHistory();

  const handleClickBack = (url) => {
    history.push(props.backUrl);
  };

  const handleClickNext = (url) => {
    history.push(props.nextUrl);
  }

  return (
    <footer className='footer'>
      <button onClick={() => handleClickBack(props.backUrl)}>BACK</button>
      <button onClick={() => handleClickNext(props.nextUrl)}>NEXT</button>
    </footer>
  );
}

export default Footer;
