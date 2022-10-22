import type { FC, FormEvent } from 'react';
import React, { useCallback, useState } from 'react';
import { Form, Header, Radio } from 'semantic-ui-react';

const DEFAULT_SIZES = {
  '1': [375, 812],
  '2': [400, 500],
};

const [defaultValue] = Object.keys(DEFAULT_SIZES);

/**
 * SelectSizes
 * @constructor
 */
const SelectSizes: FC = () => {
  const [active, setActive] = useState(defaultValue);

  /**
   * On change active size
   */
  const onChange = useCallback(
    (e: FormEvent<HTMLInputElement>) =>
      setActive(String(e.currentTarget.dataset.id)),
    []
  );

  return (
    <Form>
      <Header>Select size from list</Header>
      <Form.Group grouped>
        {Object.entries(DEFAULT_SIZES).map(([id, [width, height]]) => (
          <Form.Field key={id}>
            <Radio
              data-id={id}
              label={`${width}x${height}`}
              slider
              checked={active === id}
              onChange={onChange}
            />
          </Form.Field>
        ))}
      </Form.Group>
    </Form>
  );
};

export default SelectSizes;
