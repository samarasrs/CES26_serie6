import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './features/components/Header';

function App() {
  return (
    <div className="App">
      <Header title ="Série 6 - CES26"
            subtitle="Samara Ribeiro Silva - COMP22"/> 
      
        
      <Counter />
       
    </div>
  );
}

export default App;
