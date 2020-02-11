import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';

import Lesson from './pages/Lesson/index.js';

function App() {
  return (
    <div className="app">
      <Header/>
      <main><Lesson/></main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
