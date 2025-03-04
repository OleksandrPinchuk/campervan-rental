import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers, fetchFilteredCampers } from "./operations";

const initialState = {
    items: [],
    currentItem: null,
    loading: false,
    error: null,
};

const campersSlice = createSlice({
    name: "campers",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload.items;
            })
            .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.currentItem = action.payload.items;
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.currentItem = action.payload;
            })
            .addMatcher(isAnyOf(fetchCampers.pending, fetchFilteredCampers.pending, fetchCamperById.pending,), state => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isAnyOf(fetchCampers.rejected, fetchFilteredCampers.rejected, fetchCamperById.rejected,), (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
        
    },
});

export default campersSlice.reducer;