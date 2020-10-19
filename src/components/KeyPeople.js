import React from 'react';

import globantLogo from './../images/Globant-logo.png';

import Footer from './shared/Footer';
import Person from './Person';

import imgDamianLazzarano from './../images/people/Damian_Lazzarano.png';
import imgDavidCorrea from './../images/people/David_Correa.png';
import imgGabrielMartinez from './../images/people/Gabriel_Martinez.png';
import imgLucianaZavaleta from './../images/people/Luciana_Zavaleta.png';
import imgSebastianGomez from './../images/people/Sebastian_Gomez.png';

function KeyPeople() {
  const people = [
    {
      name: 'Damian Lazzarano',
      role: 'SP & UI STUDIO PARTNER',
      slackUser: '@damian.lazzarano',
      email: 'damian.lazzarano@globant.com',
      imagePath: imgDamianLazzarano,
    },
    {
      name: 'David Correa',
      role: 'SP & UI STUDIO PARTNER',
      slackUser: '@david.correa',
      email: 'david.correa@globant.com',
      imagePath: imgDavidCorrea,
    },
    {
      name: 'Luciana Zavaleta',
      role: 'UI ENGINEERING PARTNER',
      slackUser: '@luciana.zavaleta',
      email: 'luciana.zavaleta@globant.com',
      imagePath: imgLucianaZavaleta,
      slackId: 'UDAKATYSV',
    },
    {
      name: 'Gabriel Martinez',
      role: 'UI TDC FOCAL TECH. DIRECTOR',
      slackUser: '@gabo',
      email: 'gabriel.martinez@globant.com',
      imagePath: imgGabrielMartinez,
    },
    {
      name: 'Sebastian Gomez',
      role: 'UI ENGINEERING TECH. MANAGER',
      slackUser: '@s.gomez',
      email: 's.gomez@globant.com',
      imagePath: imgSebastianGomez,
    },
  ];

  return (
    <React.Fragment>
      <div className='triforce_letter_div'>
        <img src={globantLogo} alt='Globant Logo' width='12%' />
        <h1>UI Studio COPE</h1>
      </div>
      <div className='triforce_name_div'>
        <p> Key People</p>
      </div>
      <Person people={people} />
      <Footer backUrl='values' nextUrl='' />
    </React.Fragment>
  );
}

export default KeyPeople;
