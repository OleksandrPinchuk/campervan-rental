import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: null,
    equipment: {
        ac: false,
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
    },
    form: {
        van: false,
        fullyIntegrated: false,
        alcove: false,
    },
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
            // state.filters[key] = value;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        toggleEquipment: (state, action) => {
            const { key } = action.payload;
            state.equipment[key] = !state.equipment[key];
        },
        toggleForm: (state, action) => {
            const { type } = action.payload;
            state.form[type] = !state.form[type];
        },
    }
});

export const { updateFilter, toggleEquipment, toggleForm } = filtersSlice.actions;
export default filtersSlice.reducer;