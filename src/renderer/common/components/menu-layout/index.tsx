import type { FC } from 'react';
import React, { useMemo } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react';
import type { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import ROUTE from '@constants/route';
import type { RouteValue } from '@constants/route';
import type { IStore } from './index.stores';
import styles from './styles.module.scss';

/**
 * MenuLayout
 * @constructor
 */
const MenuLayout: FC<IStore> = ({
  store: {
    selectedSize: { width, height },
  },
}) => {
  const { pathname } = useLocation();

  /**
   * Link and icon for access to the next route
   */
  const { link, icon } = useMemo((): {
    link: RouteValue;
    icon: SemanticICONS;
  } => {
    switch (pathname) {
      case ROUTE.SETTINGS:
        return { link: ROUTE.HOME, icon: 'angle left' };

      case ROUTE.HOME:
      default:
        return {
          link: ROUTE.SETTINGS,
          icon: 'settings',
        };
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Label className={styles.label}>
          <b>Selected:</b>
          <span>
            {width}x{height}
          </span>
        </Label>

        <Link to={link} replace className={styles.link}>
          <Icon name={icon} size="large" />
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default MenuLayout;
