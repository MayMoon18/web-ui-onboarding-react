import React from 'react';

import Row from 'react-bootstrap/Row';

import './styles/Person.css';

import ImgCard from './shared/Card';

const Person = ({ people }) => {
  return (
    <div className="cards-container">
      <Row >
        {people.map((item, index) => (
          <ImgCard key={index} person={item} />
        ))}
      </Row>
    </div>
  );
};

export default Person;
