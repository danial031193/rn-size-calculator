import type { FC } from 'react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: FC = () => (
  <div>
    <div>
      <Link to="/" replace>
        Calculator
      </Link>
      <br />

      <Link to="/settings" replace>
        Settings
      </Link>
    </div>
    <br />

    <Outlet />
  </div>
);

export default Layout;
