import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { addJob, deleteJob, editJob, getJobs } from './jobApi';
const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
}

// asyn thunks
export const fetchJobs = createAsyncThunk(
    'job/fetchJobs',
    async() => {
        const jobs = await getJobs();
        return jobs;
    }
)
export const createJob = createAsyncThunk(
    'job/createJob',
    async(data) => {
        const job = await addJob(data);
        return job;
    }
)
export const changeJob = createAsyncThunk(
    'job/changeJob',
    async({id, data}) => {
        const job = await editJob(id,data);
        return job;
    }
)
export const removeJob = createAsyncThunk(
    'job/removeJob',
    async(id) => {
        const job = await deleteJob(id);
        return job;
    }
)

//create slice 
const jobSlice = createSlice({
    name: 'job',
    initialState,
    extraReducers: (builder) => {
        builder
        //get jobs
        .addCase(fetchJobs.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.jobs = action.payload;
        })
        .addCase(fetchJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.jobs = [];
            state.error = action.error?.message
        })

        //create jobs
        .addCase(createJob.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(createJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.jobs.push(action.payload);
        })
        .addCase(createJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.jobs = [];
            state.error = action.error?.message
        })

        //edit jobs
        .addCase(changeJob.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(changeJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            const indexToChange = state.jobs.findIndex(
                (t) => t.id === action.payload.id)
            state.jobs[indexToChange] = action.payload;
        })
        .addCase(changeJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.jobs = [];
            state.error = action.error?.message
        })

        //delete jobs
        .addCase(removeJob.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(removeJob.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.jobs = state.jobs.filter((job) => job.id !== action.meta.id)
        })
        .addCase(removeJob.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.jobs = [];
            state.error = action.error?.message
        })
    }
})

export default jobSlice.reducer;