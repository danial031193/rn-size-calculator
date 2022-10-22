import { Manager } from '@lomray/react-mobx-manager';
import { action, computed, makeObservable, observable } from 'mobx';
import { DEFAULT_SIZE_ID, DEFAULT_SIZES_LIST } from '@constants/index';
import SIZE from '@interfaces/size';
import type TSizesList from '@interfaces/sizes-list';

/**
 * Main app store
 */
class AppStore {
  static isSingleton = true;

  /**
   * Store id
   */
  static id = 'AppStore';

  /**
   * Active button
   */
  public activeSizeButton = SIZE.WIDTH;

  /**
   * Sizes list
   */
  public sizesList: TSizesList = DEFAULT_SIZES_LIST;

  /**
   * Selected id from sizesList
   */
  public selectedSizeId = DEFAULT_SIZE_ID;

  /**
   * @constructor
   */
  constructor() {
    makeObservable(this, {
      activeSizeButton: observable,
      sizesList: observable,
      selectedSizeId: observable,
      selectedSize: computed,
      setActiveSizeButton: action.bound,
      setSelectedSizeId: action.bound,
      addSizeListItem: action.bound,
      deleteSizeListItem: action.bound,
    });
  }

  /**
   * Selected size width and height
   */
  get selectedSize() {
    const [width, height] = this.sizesList[this.selectedSizeId];

    return { width, height };
  }

  /**
   * Set active size button
   */
  public setActiveSizeButton = (value: SIZE) => {
    this.activeSizeButton = value;
  };

  /**
   * Set selected size id
   */
  public setSelectedSizeId = (value: string) => {
    this.selectedSizeId = value;
  };

  /**
   * Add custom size item to list
   */
  public addSizeListItem = (item: readonly [number, number]) => {
    const listKeys = Object.keys(this.sizesList);
    const lastListId = listKeys[listKeys.length - 1];
    const newId = Number(lastListId) + 1;

    this.sizesList[newId] = [...item];
  };

  /**
   * Delete custom size item to list
   */
  public deleteSizeListItem = (id: string) => {
    delete this.sizesList[id];
  };
}

export default Manager.persistStore(AppStore, 'calculator-app');
