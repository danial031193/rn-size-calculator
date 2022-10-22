import type { FC } from 'react';
import React from 'react';
import SizeButtons from './size-buttons/index.wrapper';
import SizeForm from './size-form/index.wrapper';

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
