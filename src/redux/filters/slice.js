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
        alcove: false,
        fullyIntegrated: false,
        panelTruck: false,
    },
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        toggleEquipment: (state, action) => {
            const { key } = action.payload;
            state.equipment[key] = !state.equipment[key];
        },
        toggleTransmission: (state, action) => {
            state.transmission.automatic = 
                typeof action.payload === 'boolean' ? action.payload : !state.transmission.automatic;
        },

        setForm: (state, action) => {
            const { key } = action.payload;
            state.form[key] = !state.form[key];
        },

        clearFilters: () => {
            return initialState;
        }
    }
});

export const { clearFilters, toggleEquipment, toggleTransmission, setForm, updateFilter } = filtersSlice.actions;
export default filtersSlice.reducer;