import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

const fetchData = async (endpoint, params = {}, thunkAPI) => {
    try {
        const query = new URLSearchParams(params).toString();
        const response = await axios.get(`${endpoint}?${query}`);
        // console.log(response.config.url);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
};

export const fetchFilteredCampers = createAsyncThunk(
    'campers/fetchFiltered',
    async ({ filters = {}, page = 1, limit = 4 } = {}, thunkAPI) => {
        const params = { page, limit };

        if (filters.location) {
            params.location = filters.location;
        }

        if (filters.transmission?.automatic) {
            params.transmission = "automatic";
        }
        if (filters.form) {
            params.form = Object.keys(filters.form).filter(key => filters.form[key]);
        }
        if (filters.equipment) {
            Object.keys(filters.equipment).forEach((key) => {
                if (filters.equipment[key]) params[key] = true;
            });
        }

        return fetchData('/campers', params, thunkAPI);
    }
);

export const fetchCamperById = createAsyncThunk('campers/fetchById',
    async (id, thunkAPI) => {
    return fetchData(`/campers/${id}`, {}, thunkAPI);
});