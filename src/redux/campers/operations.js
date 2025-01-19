import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

// export const fetchCampers = createAsyncThunk('campers/fetchAll',
//     async (_, thunkAPI) => {
//     try {
//         const response = await axios.get('/campers');
//         return response.data.items;
//         } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// export const fetchFilteredCampers = createAsyncThunk('filters/fetchAll',
//     async (filters, thunkAPI) => {
//     try {
//         const params = {};
//         if (filters.location) {
//             params.location = filters.location;
//         }
//         if (filters.form) {
//             params.form= filters.form;
//         }
//         if (filters.transmission.automatic) {
//             params.transmission= filters.transmission;
//         }
//         Object.keys(filters.equipment).forEach((key) => {
//         if (filters.equipment[key]) {
//             params[key] = true;
//         }
//         });

//         const query = new URLSearchParams(params).toString();
//         const response = await axios.get(`/campers?${query}`);
//         // dispatch({ type: 'vehicles/setVehicles', payload: response.data });
//         return response.data.items;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });

// Загальна функція для виконання запиту
const fetchData = async (endpoint, params = {}, thunkAPI) => {
    try {
        const query = new URLSearchParams(params).toString();
        const response = await axios.get(`${endpoint}?${query}`);
        return response.data.items;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
};

// Отримання всіх кемперів
export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
    return fetchData('/campers', {}, thunkAPI);
});

// Отримання кемперів із фільтрами
export const fetchFilteredCampers = createAsyncThunk('campers/fetchAll', async (filters, thunkAPI) => {
    const params = {};

    // Додавання фільтрів до запиту
    if (filters.location) params.location = filters.location;
    if (filters.form) params.form = filters.form;
    // if (filters.transmission?.automatic !== undefined) {
    //     params.transmission = filters.transmission.automatic ? 'automatic' : 'manual';
    // }

    // Фільтрація за обладнанням
    if (filters.equipment) {
        Object.keys(filters.equipment).forEach((key) => {
            if (filters.equipment[key]) params[key] = true;
        });
    }

    return fetchData('/campers', params, thunkAPI);
});