import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from '@pages/calculator';
import Settings from '@pages/settings';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);

export default App;
