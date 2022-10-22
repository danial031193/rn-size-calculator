import type { StoresType } from '@lomray/react-mobx-manager';
import CalculationsStore from '@store/calculations';

const stores = {
  calculationsStore: CalculationsStore,
};

export type IStore = StoresType<typeof stores>;

export default stores;
