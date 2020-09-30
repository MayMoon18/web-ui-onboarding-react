import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Welcome from './components/Welcome';
import LetsImagine from './components/LetsImagine';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
