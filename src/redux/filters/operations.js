import axios from 'axios';

export const fetchFilteredVehicles = (filters) => async (dispatch) => {
    try {
        // Підготуйте URL з параметрами запиту
        const params = {};

        if (filters.location) {
        params.location = filters.location;
        }
        if (filters.bodyType) {
        params.bodyType = filters.bodyType;
        }

        Object.keys(filters.equipment).forEach((key) => {
        if (filters.equipment[key]) {
            params[key] = true; // Додаємо, якщо вибрано
        }
        });

        const query = new URLSearchParams(params).toString(); // Конвертуємо в query string
        const response = await axios.get(`https://mockapi.io/api/vehicles?${query}`);
        dispatch({ type: 'vehicles/setVehicles', payload: response.data });
    } catch (error) {
        console.error('Error fetching vehicles:', error);
    }
};