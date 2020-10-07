import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'fontsource-roboto';

import Welcome from './components/Welcome';
import LetsImagine from './components/LetsImagine';
import CareerPath from './components/CareerPath';
import Triforce from './components/Triforce';
import Values from './components/Values';

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
            <Triforce addedName={valueName}/>
          </Route>
<<<<<<< HEAD
          <Route path='/values'>
            <Values />
          </Route>
=======
>>>>>>> 355b29956ba8a68fe019cf38de990d3b4937ba1f
        </Switch>
      </Router>
    </div>
  );
}

export default App;
