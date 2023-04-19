import { configureStore } from "@reduxjs/toolkit";
import tranSactionReducer from '../features/tranaction/transactionSlice';
export const store = configureStore({
    reducer: {
        transaction: tranSactionReducer
    }
})