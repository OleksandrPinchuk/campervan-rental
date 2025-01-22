import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: "",
    equipment: {
        AC: false,
        kitchen: false,
        TV: false,
        bathroom: false,
    },
    transmission: {
        automatic: false,
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
        toggleTransmission: (state, action) => {
            // const { automatic } = action.payload;
            state.transmission.automatic = action.payload;
        },
        toggleForm: (state, action) => {
            const { type } = action.payload;
            state.form[type] = !state.form[type];
        },
        // clearFilters: () => initialState,
    }
});

export const { updateFilter, toggleEquipment, toggleTransmission, toggleForm } = filtersSlice.actions;
export default filtersSlice.reducer;