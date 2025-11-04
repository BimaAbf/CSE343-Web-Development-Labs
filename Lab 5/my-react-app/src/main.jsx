// src/main.jsx
// This is the entry point for your Vite app.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importing your App component
import './App.css'; // Importing the styles

// This tells React to render your <App> component
// inside the <div id="root"></div> in your index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
