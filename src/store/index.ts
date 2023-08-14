import { configureStore } from '@reduxjs/toolkit';

import { uiSlice } from './slices';

export const store = configureStore({
  reducer: {
    [uiSlice.name]: uiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './slices';
