import type { FC } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

/**
 * Calculator
 * @constructor
 */
const Calculator: FC = () => (
  <div>
    <p className={styles.test}>Calculator</p>
    <Link to="/settings" replace>
      Settings
    </Link>
  </div>
);

export default Calculator;
