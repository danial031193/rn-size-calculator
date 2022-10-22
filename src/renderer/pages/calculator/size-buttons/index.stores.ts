import type { StoresType } from '@lomray/react-mobx-manager';
import AppStore from '@store/app';

const stores = {
  store: AppStore,
};

export type IStore = StoresType<typeof stores>;

export default stores;
