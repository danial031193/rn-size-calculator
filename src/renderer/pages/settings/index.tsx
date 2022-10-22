import type { FC } from 'react';
import React from 'react';
import AddSize from './add-size/index.wrapper';
import SelectSizes from './select-sizes/index.wrapper';

/**
 * Settings
 * @constructor
 */
const Settings: FC = () => (
  <div>
    <SelectSizes />
    <AddSize />
  </div>
);

export default Settings;
