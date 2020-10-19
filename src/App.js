import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'fontsource-roboto';

import Welcome from './components/Welcome';
import LetsImagine from './components/LetsImagine';
import CareerPath from './components/CareerPath';
import Triforce from './components/Triforce';
import Values from './components/Values';
import KeyPeople from './components/KeyPeople';
import Ready from './components/Ready';

function App() {
  const [valueName, setValueName] = useState('');

  const addName = (name) => {
    setValueName(name);
  };

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Welcome addName={addName} />
          </Route>
          <Route path='/imagine'>
            <LetsImagine addedName={valueName} />
          </Route>
          <Route path='/career-path'>
            <CareerPath />
          </Route>
          <Route path='/triforce'>
            <Triforce addedName={valueName} />
          </Route>
          <Route path='/values'>
            <Values />
          </Route>
          <Route path='/key-people'>
            <KeyPeople />
          </Route>
          <Route path='/ready'>
            <Ready />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
