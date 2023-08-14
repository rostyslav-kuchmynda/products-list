import { ProductType } from '../../../types/products';

export const UI_SLICE_ID = 'ui';

export type UIStateSlice = {
  productList: Array<ProductType> | [];
};

export type UIStoreSlice = { [UI_SLICE_ID]: UIStateSlice };
