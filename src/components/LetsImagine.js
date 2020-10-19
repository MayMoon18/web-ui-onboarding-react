import React from 'react';

import './styles/LetsImagine.css';

import Footer from './shared/Footer';

function LetsImagine({ addedName }) {
  return (
    <div className='background-container'>
      <p>
        <strong className='strong'>{addedName}</strong> already belongs to a
        studio, has a seniority and probably already works on a specific
        project. To understand it better
      </p>
      <p>
        <strong>Let's imagine!</strong>
      </p>
      <p>
        First we need to create our <strong>fictional character!</strong>
      </p>
      <Footer backUrl='/' nextUrl='career-path' />
    </div>
  );
}

export default LetsImagine;
