import { post } from "./api.js";

export async function register(username, password, email) {
    const result = await post('/users', { username, password, email });
}

export async function login() {
    
}

export async function logout() {
    
}