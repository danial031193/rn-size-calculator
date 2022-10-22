import { withStores } from '@lomray/react-mobx-manager';
import stores from './index.stores';
import SelectSizes from './index';

export default withStores(SelectSizes, stores);
