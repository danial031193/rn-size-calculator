import type { FC } from 'react';
import React from 'react';
import { Form } from 'semantic-ui-react';
import styles from './styles.module.scss';

/**
 * SizeForm
 * @constructor
 */
const SizeForm: FC = () => (
  <Form className={styles.form}>
    <Form.Field>
      <Form.Input label="Element" placeholder="Enter element size" />
    </Form.Field>
    <Form.Field>
      <Form.Input label="Result" placeholder="Will be automatically copied" />
    </Form.Field>
  </Form>
);

export default SizeForm;
