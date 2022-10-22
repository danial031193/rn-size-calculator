import type { FC, MouseEvent } from 'react';
import React, { useCallback, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import SIZE from '@interfaces/size';
import type { IStore } from './index.stores';
import styles from './styles.module.scss';

const keyToSIZE = {
  q: SIZE.WIDTH,
  w: SIZE.HEIGHT,
  e: SIZE.FONT,
} as const;

/**
 * SizeButtons
 * @constructor
 */
const SizeButtons: FC<IStore> = ({
  store: { activeSizeButton, setActiveSizeButton },
}) => {
  /**
   * On click button
   */
  const onClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) =>
      void setActiveSizeButton(e.currentTarget.dataset.value as SIZE),
    [setActiveSizeButton]
  );

  /**
   * Keydown listener
   */
  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (!e.ctrlKey) {
        return;
      }

      const size = keyToSIZE?.[e.key as keyof typeof keyToSIZE];

      if (!size) {
        return;
      }

      setActiveSizeButton(size);
    },
    [setActiveSizeButton]
  );

  /**
   * Add keydown listener event
   */
  useEffect(() => {
    window.addEventListener('keydown', onKeydown);

    return () => window.removeEventListener('keydown', onKeydown);
  }, [onKeydown]);

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
