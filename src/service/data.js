import { get, post } from "./api.js";

export const addVehicle = async (data) => {
    return await post('/classes/vehicles', data);
};

const retrievAllVehicles = async () => {
    return get('/classes/vehicles');
};