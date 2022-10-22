import type { FC, FormEvent, MouseEvent } from 'react';
import React, { useCallback } from 'react';
import { Button, Form, Header, Radio } from 'semantic-ui-react';
import type TSizesList from '@interfaces/sizes-list';
import type { IStore } from './index.stores';
import styles from './styles.module.scss';

/**
 * SelectSizes
 * @constructor
 */
const SelectSizes: FC<IStore> = ({
  store: { selectedSizeId, sizesList, setSelectedSizeId, deleteSizeListItem },
}) => {
  /**
   * On change active size
   */
  const onChange = useCallback(
    (e: FormEvent<HTMLInputElement>) =>
      void setSelectedSizeId(String(e.currentTarget.dataset.id)),
    [setSelectedSizeId]
  );

  /**
   * On delete size item
   */
  const onDelete = useCallback(
    (e: MouseEvent<HTMLButtonElement>) =>
      void deleteSizeListItem(String(e.currentTarget.dataset.id)),
    [deleteSizeListItem]
  );

  return (
    <Form>
      <Header>Select size from list</Header>

      <Form.Group grouped>
        {Object.entries(sizesList as TSizesList).map(
          ([id, [width, height]], index) => {
            const isSelected = selectedSizeId === id;

            return (
              <Form.Field key={id} className={styles.field}>
                <Radio
                  data-id={id}
                  label={`${width}x${height}`}
                  slider
                  checked={isSelected}
                  onChange={onChange}
                />
                {index > 0 && ( // hide button for the first element
                  <Button
                    className={styles.button}
                    data-id={id}
                    onClick={onDelete}
                    disabled={isSelected}
                    color="red"
                    size="tiny"
                    icon="trash alternate"
                  />
                )}
              </Form.Field>
            );
          }
        )}
      </Form.Group>
    </Form>
  );
};

export default SelectSizes;
