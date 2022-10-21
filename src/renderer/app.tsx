import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@components/layout';
import Calculator from '@pages/calculator';
import Settings from '@pages/settings';
import '@assets/styles/global.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Calculator />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
