import React from 'react'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartSlice from '../reducers/cartSlice';

const AppStore = configureStore({
    reducer:{
        cart:cartSlice,
    }
},__REDUX_DEVTOOLS_EXTENSION__()); //ye redux devtool funt jo hai ye lagaya so that we can see our store how its working.

export default AppStore;
