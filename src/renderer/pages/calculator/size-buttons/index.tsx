import type { FC, MouseEvent } from 'react';
import React, { useCallback, useState } from 'react';
import { Button } from 'semantic-ui-react';
import SIZES from '@interfaces/sizes';
import styles from './styles.module.scss';

/**
 * SizeButtons
 * @constructor
 */
const SizeButtons: FC = () => {
  const [active, setActive] = useState(SIZES.WIDTH);

  const onClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) =>
      setActive(e.currentTarget.dataset.value as SIZES),
    []
  );

  return (
    <div>
      <Button.Group className={styles.buttons}>
        {Object.values(SIZES).map((size) => (
          <Button
            key={size}
            data-value={size}
            onClick={onClick}
            active={active === size}
          >
            {size}
          </Button>
        ))}
      </Button.Group>
    </div>
  );
};

export default SizeButtons;
