import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    filter: 'all',
    search: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterSelected: (state, action) => {
            state.filter = action.payload;
        },
        searched: (state, action) => {
            state.search = action.payload;
        }
    }
})

export const {filterSelected, searched} = filterSlice.actions;
export default filterSlice.reducer;