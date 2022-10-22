import {
  Manager,
  MobxLocalStorage,
  StoreManagerProvider,
} from '@lomray/react-mobx-manager';
import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MenuLayout from '@components/menu-layout/index.wrapper';
import ROUTE from '@constants/route';
import Calculator from '@pages/calculator';
import Settings from '@pages/settings';
import '@assets/styles/global.scss';

const storeManager = new Manager({
  storage: new MobxLocalStorage(),
  storesParams: {},
});

/**
 * App
 * @constructor
 */
const App = () => (
  <StoreManagerProvider
    shouldInit
    storeManager={storeManager}
    fallback={<span />}
  >
    <Router>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route path={ROUTE.HOME} element={<Calculator />} />
          <Route path={ROUTE.SETTINGS} element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  </StoreManagerProvider>
);

export default App;
