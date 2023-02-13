/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TimerPage from './pages/TimerPage';
import Tbt from './pages/Tbt';

const App = () => (
  <div>
    <Routes>
      <Route path="/tbt" element={ <Tbt /> } />
      <Route exact path="/" element={ <TimerPage /> } />
    </Routes>

  </div>
);

export default App;
