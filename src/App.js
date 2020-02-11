import React, { useState, useEffect } from 'react';
import './App.css';

import Lesson from './pages/Lesson/index.js';

function App() {
  return (
    <div className="app">
      <header></header>
      <main><Lesson/></main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
