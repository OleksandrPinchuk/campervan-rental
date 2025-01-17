import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const campersSlice = createSlice({
    name: "campers",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
    }
});

export default campersSlice.reducer;