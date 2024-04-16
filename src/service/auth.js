import { setUserData } from "../util.js";
import { post } from "./api.js";

export async function register(username, password, email) {
    const { objectId, sessionToken } = await post('/users', { username, password, email });
    setUserData({ username, objectId, sessionToken, email });
}

export async function login() {

}

export async function logout() {

}