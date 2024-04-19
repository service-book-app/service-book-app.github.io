import { post } from "./api.js";

export const addVehicle = async (data) => {
    const newVehicle = await post('/classes/vehicles', data);
    console.log(newVehicle);
};