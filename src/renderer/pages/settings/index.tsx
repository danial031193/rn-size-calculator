import type { FC } from 'react';
import React from 'react';
import AddSize from './add-size';
import SelectSizes from './select-sizes';

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
