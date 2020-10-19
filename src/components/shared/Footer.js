import React from 'react';
import { useHistory } from 'react-router-dom';

import './../styles/Footer.css';

function Footer(props) {
  let history = useHistory();

  const handleClick = (url) => {
    history.push(url);
  };

  const back = (
    <button
      className='footer-button'
      onClick={() => handleClick(props.backUrl)}
    >
      BACK
    </button>
  );

  const next = (
    <button
      className='footer-button'
      onClick={() => handleClick(props.nextUrl)}
    >
      NEXT
    </button>
  );

  if (props.backUrl === 'key-people') {
    return <footer className='footer'>{back}</footer>;
  } else {
    return (
      <footer className='footer'>
        {back}
        {next}
      </footer>
    );
  }
}

export default Footer;
