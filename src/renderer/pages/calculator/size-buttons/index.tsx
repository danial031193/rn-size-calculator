import type { FC, MouseEvent } from 'react';
import React, { useCallback } from 'react';
import { Button } from 'semantic-ui-react';
import SIZE from '@interfaces/size';
import type { IStore } from './index.stores';
import styles from './styles.module.scss';

/**
 * SizeButtons
 * @constructor
 */
const SizeButtons: FC<IStore> = ({
  store: { activeSizeButton, setActiveSizeButton },
}) => {
  const onClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) =>
      void setActiveSizeButton(e.currentTarget.dataset.value as SIZE),
    [setActiveSizeButton]
  );

  return (
    <div>
      <Button.Group className={styles.buttons}>
        {Object.values(SIZE).map((size) => (
          <Button
            key={size}
            data-value={size}
            onClick={onClick}
            active={activeSizeButton === size}
          >
            {size}
          </Button>
        ))}
      </Button.Group>
    </div>
  );
};

export default SizeButtons;
