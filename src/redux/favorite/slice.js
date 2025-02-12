import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const camperId = action.payload;
            console.log("Toggling favorite for camperId:", camperId);
            if (!state.favorites) {
                state.favorites = [];
            }
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