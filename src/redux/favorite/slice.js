import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    // isLoading: false,
    // error: null,
};

const favoriteSlice = createSlice({
    name: "campers",
    initialState,
    extraReducers: (builder) => {
        builder
            
    }
});

export default favoriteSlice.reducer;