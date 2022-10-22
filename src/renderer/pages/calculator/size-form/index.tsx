import type { FC } from 'react';
import React from 'react';
import { Form } from 'semantic-ui-react';
import type { IStore } from './index.stores';
import styles from './styles.module.scss';

/**
 * SizeForm
 * @constructor
 */
const SizeForm: FC<IStore> = ({
  calculationsStore: {
    elementInputValue,
    onChangeElementInput,
    resultInputValue,
    isCalculationsError,
  },
}) => (
  <Form className={styles.form}>
    <Form.Field>
      <Form.Input
        label="Element"
        placeholder="Enter element size"
        value={elementInputValue}
        onChange={onChangeElementInput}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        label="Result"
        placeholder="Will be automatically copied on changing"
        value={resultInputValue}
        error={isCalculationsError}
      />
    </Form.Field>
  </Form>
);

export default SizeForm;
