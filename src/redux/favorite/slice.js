import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    // isLoading: false,
    // error: null,
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const camperId = action.payload;
            if (state.favorites.includes(camperId)) {
                state.favorites = state.favorites.filter(id => id !== camperId);
            } else {
                state.favorites.push(camperId);
            }
        },
    }
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;