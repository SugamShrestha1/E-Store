import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/Cartslice';
import userReducer from './Slices/Userslice';
import productReducer from './Slices/Productslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    products: productReducer,
  },
});

export default store;
