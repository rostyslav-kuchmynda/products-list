import { createAsyncThunk } from '@reduxjs/toolkit';

import { ProductService } from '../../../services/products';
import { UI_SLICE_ID } from '../ui/types';
import { ProductType } from '../../../types/products';

export const uiGetProductList = createAsyncThunk<Array<ProductType>>(`${UI_SLICE_ID}/productList`, async () => {
  const response = await ProductService.getProducts();
  return response;
});

export const uiDeleteProductByID = createAsyncThunk(`${UI_SLICE_ID}/deleteProductByID`, async (id: number) => {
  const response = await ProductService.deleteProduct(id);
  return response;
});

export const uiAddProduct = createAsyncThunk(`${UI_SLICE_ID}/addProduct`, async (values: ProductType) => {
  const response = await ProductService.addProduct(values);
  return response;
});
