import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers, fetchFilteredCampers } from "./operations";

const initialState = {
    items: [],
    currentItem: null,
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
    limit: 4,
    totalItems: 0,
    nextPage: false,
};

const calculateNextPage = (state) => {
    const totalPages = Math.ceil(state.totalItems / state.limit);
    state.hasNextPage = state.page < totalPages;
};

const campersSlice = createSlice({
    name: "campers",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.page = action.payload.currentPage;
                console.log(action.payload);
                state.items = action.payload.items;
            })
            .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.page = action.payload.currentPage;
                state.items = action.payload.items;
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

export const { setPage } = campersSlice.actions;
export default campersSlice.reducer;