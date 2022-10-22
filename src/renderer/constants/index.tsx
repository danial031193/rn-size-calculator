import type TSizesList from '@interfaces/sizes-list';

export const DEFAULT_SIZES_LIST: TSizesList = {
  '1': [375, 812],
};

export const DEFAULT_SIZE_ID = Object.keys(
  DEFAULT_SIZES_LIST
)[0] as keyof TSizesList;

export const CALCULATIONS_ERROR = '// Calculations Error';
