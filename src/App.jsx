import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TimerPage from './pages/TimerPage';
import Tbt from './pages/Tbt';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={ <TimerPage /> } />
      <Route path="/tbt" element={ <Tbt /> } />
    </Routes>
  </div>
);

export default App;
