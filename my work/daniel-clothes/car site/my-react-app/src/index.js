// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// The root element where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component to the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
