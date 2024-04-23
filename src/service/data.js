import { get, post } from "./api.js";

export const addVehicle = async (data) => {
    const newVehicle = await post('/classes/vehicles', data);
};

const retrievAllVehicles = async () => {
    return get('/classes/vehicles');
};

const vhls = retrievAllVehicles();
window.vhls = vhls;