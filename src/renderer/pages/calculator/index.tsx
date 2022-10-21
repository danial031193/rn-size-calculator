import type { FC } from 'react';
import React from 'react';
import { Button } from 'semantic-ui-react';

/**
 * Calculator
 * @constructor
 */
const Calculator: FC = () => (
  <div>
    <Button.Group>
      <Button>wp</Button>
      <Button>hp</Button>
      <Button>fs</Button>
    </Button.Group>
  </div>
);

export default Calculator;
