// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Gallery />
      <SocialLinks />
    </div>
  );
}

export default App;
