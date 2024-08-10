import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchSatatusSlice from "./fetchSatatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchSatatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});
export default myntraStore;
