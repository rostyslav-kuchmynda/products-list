import { createSlice } from '@reduxjs/toolkit';

import { uiAddProduct, uiDeleteProductByID, uiGetProductList, uiSearchProduct } from './actions';

import { UI_SLICE_ID, UIStateSlice } from './types';

const uiInitialState: UIStateSlice = {
  productList: [],
};

export const uiSlice = createSlice({
  name: UI_SLICE_ID,
  initialState: uiInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(uiGetProductList.fulfilled, (state, action) => {
      state.productList = action.payload;
    });

    builder.addCase(uiDeleteProductByID.fulfilled, (state, action) => {
      state.productList = state.productList.filter(product => product.id !== action.meta.arg);
    });

    builder.addCase(uiAddProduct.fulfilled, (state, action) => {
      const numberOfProducts = state.productList.length + 1;
      state.productList = [...state.productList, { ...action.meta.arg, id: numberOfProducts }];
    });

    builder.addCase(uiSearchProduct.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});
