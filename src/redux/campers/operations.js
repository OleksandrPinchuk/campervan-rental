import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCampers = createAsyncThunk('campers/fetchAll',
    async (_, thunkAPI) => {
    try {
        const response = await axios.get('/campers');
        return response.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);