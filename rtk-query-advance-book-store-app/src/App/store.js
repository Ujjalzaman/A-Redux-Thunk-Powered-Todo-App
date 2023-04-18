import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { bookApi } from "../Features/bookApi";
import  filterReducer  from "../Features/filterSlice";

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware)
})