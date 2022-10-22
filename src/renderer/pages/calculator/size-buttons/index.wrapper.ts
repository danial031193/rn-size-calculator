import { withStores } from '@lomray/react-mobx-manager';
import stores from './index.stores';
import SizeButtons from './index';

export default withStores(SizeButtons, stores);
