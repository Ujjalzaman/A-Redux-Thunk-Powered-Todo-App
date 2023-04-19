import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
    sort: '',
    searchTerm : ''
};

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers: {
        filterSelected : (state, action) => {
            state.filter = action.payload;
        },
        searched : (state, action) => {
            state.searchTerm = action.payload;
        },
        sorted : (state, action) => {
            state.sort = action.payload;
        }
    }
})

export default filterSlice.reducer;
export const {filterSelected, searched, sorted} = filterSlice.actions;