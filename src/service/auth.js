import { clearUserData, setUserData } from "../util.js";
import { post } from "./api.js";

export async function register(username, password) {
    const user = await post('/users', { username, password });
    setUserData(user);
}

export async function login(username, password) {
    const user = await post('/login', { username, password });
    setUserData(user);
}

export async function logout(ctx) {
    post('/logout');
    clearUserData();
    ctx.page.redirect('/');
}