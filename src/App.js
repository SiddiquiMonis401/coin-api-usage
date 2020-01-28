import React from 'react';
import logo from './Images/126765016-exchange-kucoin-the-crypto-coins-or-cryptocurrency-logo-market-emblem-coins-icos-and-tokens-icon-.jpg';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Price from './Pages/Price'
function App() {
  return (
    <div >
      <NavBar />
      <Header />
      <div className="App">
      <Price />
      </div>
    </div>
  );
}

export default App;
