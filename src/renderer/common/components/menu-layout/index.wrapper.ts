import { withStores } from '@lomray/react-mobx-manager';
import stores from './index.stores';
import MenuLayout from './index';

export default withStores(MenuLayout, stores);
