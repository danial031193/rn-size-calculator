import { withStores } from '@lomray/react-mobx-manager';
import stores from './index.stores';
import SizeForm from './index';

export default withStores(SizeForm, stores);
