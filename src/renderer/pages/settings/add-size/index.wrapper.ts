import { withStores } from '@lomray/react-mobx-manager';
import stores from './index.stores';
import AddSize from './index';

export default withStores(AddSize, stores);
