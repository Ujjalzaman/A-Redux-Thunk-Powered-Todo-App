import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { addTransaction, deleteTransaction, editTransaction, getTransactions } from './transactionApi';
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: '',
    editing: {},
}

// async thunk
export const fetchTransations = createAsyncThunk(
    "transaction/fetchTransactions",
    async() => {
        const transactions = await getTransactions();
        return transactions;
    }
)
export const createTransation = createAsyncThunk(
    "transaction/createTransaction",
    async(data) => {
        const transaction = await addTransaction(data);
        return transaction;
    }
)
export const changeTransation = createAsyncThunk(
    "transaction/changeTransaction",
    async({id, data}) => {
        const transaction = await editTransaction(id,data);
        return transaction;
    }
)
export const removeTransation = createAsyncThunk(
    "transaction/removeTransaction",
    async(id) => {
        const transaction = await deleteTransaction(id);
        return transaction;
    }
)

// create slice 
const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        editActive : (state, action) =>{
            state.editing = action.payload;
        },
        editInActive : (state, action) =>{
            state.editing = {};
        }
    },
    extraReducers: (builder) =>{
        builder
        //get
        .addCase(fetchTransations.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchTransations.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.transactions = action.payload
        })
        .addCase(fetchTransations.rejected, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.transactions = [];
            state.error = action.error?.message;
        })

        //create
        .addCase(createTransation.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(createTransation.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.transactions.push(action.payload);
        })
        .addCase(createTransation.rejected, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.transactions = [];
            state.error = action.error?.message;
        })
        //change
        .addCase(changeTransation.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(changeTransation.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            const indexToUpdate = state.transactions.findIndex(
                (t) => t.id ===action.payload.id
            )
            state.transactions[indexToUpdate] = action.payload;
        })
        .addCase(changeTransation.rejected, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.transactions = [];
            state.error = action.error?.message;
        })
        //Remove
        .addCase(removeTransation.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(removeTransation.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.transactions = state.transactions.filter(
                (t) => t.id != action.meta.arg
            );
        })
        .addCase(removeTransation.rejected, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.error = action.error?.message;
        })
    }
})

export default transactionSlice.reducer;
export const {editActive, editInActive} = transactionSlice.actions;