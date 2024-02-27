import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name:'fetchStatus',
    initialState:{
        fetchingDone:false,
        currentlyFetching:false
    },
    reducers:{
        markFetchDone:(state)=>{
            state.fetchingDone = true
        },
        markFetchingStarted:(state)=>{
            state.currentlyFetching = true
        },
        markFetchingFinished:(state)=>{
             state.currentlyFetching = false
        }
    }
})

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
