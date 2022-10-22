import type {
  ClassReturnType,
  IConstructorParams,
} from '@lomray/react-mobx-manager';
import { action, computed, makeObservable, observable } from 'mobx';
import type { ChangeEvent } from 'react';
import { CALCULATIONS_ERROR } from '@constants/index';
import copyToClipboard from '@helpers/copy-to-clipboard';
import SIZE from '@interfaces/size';
import AppStore from './app';

/**
 * Main app store
 */
class CalculationsStore {
  /**
   * Store id
   */
  static id = 'CalculationsStore';

  /**
   * App store
   */
  private readonly appStore?: ClassReturnType<typeof AppStore>;

  /**
   * Element input value
   */
  public elementInputValue = '';

  /**
   * @constructor
   */
  constructor({ getStore }: IConstructorParams) {
    this.appStore = getStore(AppStore);

    makeObservable(this, {
      elementInputValue: observable,
      resultInputValue: computed,
      isCalculationsError: computed,
      onChangeElementInput: action.bound,
    });
  }

  /**
   * Result input value
   */
  get resultInputValue() {
    if (!this.appStore || !this.elementInputValue) {
      return '';
    }

    if (Number.isNaN(Number(this.elementInputValue))) {
      return CALCULATIONS_ERROR;
    }

    const {
      selectedSize: { width, height },
      activeSizeButton,
    } = this.appStore;

    // calculate result according to selected SIZE
    const size = [SIZE.WIDTH, SIZE.FONT].includes(activeSizeButton as SIZE)
      ? width
      : height;

    // calculated percent of screen size
    const calculated = (Number(this.elementInputValue) / size) * 100;

    // convert number to helper format
    const formatted = `${activeSizeButton as SIZE}(${calculated.toFixed(3)})`;
    // add js style comment
    const comment = `, // ${this.elementInputValue}`;

    // resulted string
    const result = `${formatted}${comment}`;

    void copyToClipboard(result);

    return result;
  }

  /**
   * Check calculations for error
   */
  get isCalculationsError() {
    return this.resultInputValue === CALCULATIONS_ERROR;
  }

  /**
   * On change element input
   */
  public onChangeElementInput = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    this.elementInputValue = value;
  };
}

export default CalculationsStore;
