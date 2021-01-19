import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/main.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <MainPage></MainPage>
      </header>
    </div>
  );
}

export default App;
