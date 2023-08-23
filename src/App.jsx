/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TimerPage from './pages/TimerPage';
import Tbt from './pages/Tbt';
import CheckBoxDaily from './pages/CheckBoxDaily';

const App = () => (
  <div>
    <Routes>
      <Route path="/tbt" element={ <Tbt /> } />
      <Route exact path="/" element={ <TimerPage /> } />
      <Route exact path="/checkbox-daily" element={ <CheckBoxDaily /> } />
    </Routes>

  </div>
);

export default App;
