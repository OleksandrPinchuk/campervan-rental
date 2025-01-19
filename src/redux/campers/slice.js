import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
    // filters: {
    //     location: '',
    //     ac: false,
    //     automatic: false,
    //     kitchen: false,
    //     tv: false,
    //     bathroom: false,
    //     form: '',
    // },
};

const campersSlice = createSlice({
    name: "campers",
    initialState,
    reducers: {
        // updateFilter: (state, action) => {
        //     const { key, value } = action.payload;
        //     state.filters[key] = value;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// export const { updateFilter } = campersSlice.actions;
export default campersSlice.reducer;