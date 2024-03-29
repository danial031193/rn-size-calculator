import type { FC, FormEvent } from 'react';
import React, { useCallback } from 'react';
import { Button, Divider, Form, Header } from 'semantic-ui-react';
import type { IStore } from './index.stores';
import styles from './styles.module.scss';

const INPUTS = ['Width', 'Height'];

/**
 * AddSize
 * @constructor
 */
const AddSize: FC<IStore> = ({ store: { addSizeListItem } }) => {
  /**
   * On submit new sizes
   */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      const data = new FormData(e.currentTarget);

      const width = data.get('width');
      const height = data.get('height');

      if (!width || !height) {
        return;
      }

      const newData = [Number(width), Number(height)] as const;

      addSizeListItem(newData);
    },
    [addSizeListItem]
  );

  return (
    <div className={styles.wrapper}>
      <Divider />
      <Header>Add custom size</Header>
      <Form onSubmit={onSubmit}>
        <Form.Group className={styles.group}>
          {INPUTS.map((id) => (
            <Form.Input
              key={id}
              fluid
              name={id.toLowerCase()}
              type="number"
              label={id}
              placeholder={`Enter ${id.toLowerCase()}`}
            />
          ))}
        </Form.Group>

        <Button type="submit" size="small">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddSize;
