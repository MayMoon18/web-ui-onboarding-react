import React from 'react';

import './../styles/Card.css';

function ImgCard(person) {
  let keyPerson = person.person;
  const { name, role, slackUser, email, imagePath } = keyPerson;

  return (
    <div className='card-container'>
      <img className='card-image' src={imagePath} alt={name} />
      <div className='card-header-title'>{name}</div>
      <div className="card-text">
        <a
          href={`mailto:${email}?Subject=Quisiera%20contactarte`}
          className='card-link'
        >
          {slackUser}
        </a>
        <p className='card-text'>{role}</p>
        </div>
    </div>
  );
}

export default ImgCard;
