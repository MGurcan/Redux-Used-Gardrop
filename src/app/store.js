import { configureStore } from '@reduxjs/toolkit';


import clothesReducer from '../features/GardropFeatures/ClothesSlice'
import loginPageReducer from '../features/Pages/PageSlicers/LoginPageSlice';

export const store = configureStore({
  reducer: {
    clothes: clothesReducer,
    userInfo: loginPageReducer
  },
});
