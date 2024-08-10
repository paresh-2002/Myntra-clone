import { createSlice } from "@reduxjs/toolkit";

const fetchSatatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false: 'PENDING' snd true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchSatatusActions = fetchSatatusSlice.actions;
export default fetchSatatusSlice;
