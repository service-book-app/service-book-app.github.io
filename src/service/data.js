import { post } from "./api.js";

export const addVehicle = async (data) => {
    await post('/classes')
};