import { get, post } from "./api.js";

export const addVehicle = async (data) => {
    return post('/classes/vehicles', data);
};

export const retrievAllVehicles = async () => {
    return get('/classes/vehicles');
};