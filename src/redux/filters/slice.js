import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: null,
    vehicleEquipment: {
        AC: false,
        Automatic: false,
        Kitchen: false,
        TV: false,
        Bathroom: false,
    },
    vehicleType: {
        van: false,
        fullyIntegrated: false,
        alcove: false,
    },
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        toggleEquipment: (state, action) => {
            const { equipment } = action.payload;
            state.vehicleEquipment[equipment] = !state.vehicleEquipment[equipment];
        },
        toggleVehicleType: (state, action) => {
            const { type } = action.payload;
            state.vehicleType[type] = !state.vehicleType[type];
        },
    }
});

export const { setLocation, toggleEquipment, toggleVehicleType } = filtersSlice.actions;
export default filtersSlice.reducer;