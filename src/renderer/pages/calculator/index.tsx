import type { FC } from 'react';
import React from 'react';
import SizeButtons from './size-buttons';
import SizeForm from './size-form';

/**
 * Calculator
 * @constructor
 */
const Calculator: FC = () => (
  <div>
    <SizeForm />
    <SizeButtons />
  </div>
);

export default Calculator;
