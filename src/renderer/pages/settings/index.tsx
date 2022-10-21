import type { FC } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Settings
 * @constructor
 */
const Settings: FC = () => (
  <div>
    <p>Settings</p>
    <Link to="/" replace>
      Calculator
    </Link>
  </div>
);

export default Settings;
