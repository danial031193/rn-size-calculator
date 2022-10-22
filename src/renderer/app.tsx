import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MenuLayout from '@components/menu-layout';
import ROUTE from '@constants/route';
import Calculator from '@pages/calculator';
import Settings from '@pages/settings';
import '@assets/styles/global.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route path={ROUTE.HOME} element={<Calculator />} />
        <Route path={ROUTE.SETTINGS} element={<Settings />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
