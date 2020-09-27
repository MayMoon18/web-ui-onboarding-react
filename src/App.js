import React from 'react';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  const addName = (name) => {
    console.log('NAME', name)
  }
  
  return (
    <div className="App">
      <Welcome addName={addName} />
    </div>
  );
}

export default App;