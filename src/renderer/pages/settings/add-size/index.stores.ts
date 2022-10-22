import type { StoresType } from '@lomray/react-mobx-manager';
import CalculatorStore from '@store/calculator';

const stores = {
  store: CalculatorStore,
};

export type IStore = StoresType<typeof stores>;

export default stores;
