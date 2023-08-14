import { createSelector } from '@reduxjs/toolkit';
import { UIStoreSlice, UI_SLICE_ID } from './types';

const rootUISelector = (state: UIStoreSlice) => state[UI_SLICE_ID];

export const getAllProducts = createSelector(rootUISelector, state => state.productList);
