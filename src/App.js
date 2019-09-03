import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyLink from './MyLink' ;

function App() {
  let pages = ["Page 1" , "Page 2" ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://malekbenz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <MyLink name ="Fateh"  pages= {pages } />
         <MyLink name ="Ahmed" />
          
        </a>
      </header>
    </div>
  );
}

export default App;
