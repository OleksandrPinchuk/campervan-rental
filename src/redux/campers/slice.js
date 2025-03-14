import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCamperById, fetchFilteredCampers } from "./operations";

const initialState = {
    items: [],
    currentItem: null,
    loading: false,
    error: null,
    page: 1,
    limit: 4,
    totalItems: 0,
    nextPage: false,
};

const calculateNextPage = (state) => {
    if (state.totalItems) {
        const totalPages = Math.ceil(state.totalItems / state.limit);
        state.nextPage = state.page < totalPages;
    } else {
        state.nextPage = state.items.length >= state.limit * state.page;
    }
};

const campersSlice = createSlice({
    name: "campers",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        resetItems: (state) => {
            state.items = [];
            state.page = 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.totalItems = action.payload.total || 0;
                if (state.page === 1) {
                    state.items = action.payload.items || action.payload;
                } else {
                    state.items = [...state.items, ...(action.payload.items || action.payload)];
                }
                console.log(action.payload);
                calculateNextPage(state);
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.currentItem = action.payload;
            })
            .addMatcher(isAnyOf( fetchFilteredCampers.pending, fetchCamperById.pending,), state => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isAnyOf( fetchFilteredCampers.rejected, fetchCamperById.rejected,), (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
        
    },
});

export const { setPage, resetItems } = campersSlice.actions;
export default campersSlice.reducer;