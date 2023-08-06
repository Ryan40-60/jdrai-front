import axios from "axios";
import { fromLocalStorage } from "./localStorage.service";

const BASE_URL = "http://localhost:3000";

const instance = axios.create({
  baseURL: `${BASE_URL}/auth`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export async function register(data) {
  const userData = {
    username: data.username,
    email: data.email,
    password: data.password,
  };
  try {
    const response = await instance.post("/register", userData);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to register user: ", error)];
  }
}

export async function login(data) {
  const userData = {
    log: data.usernameOrEmail,
    password: data.password,
  };
  try {
    const response = await instance.post("/login", userData);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to log user: ", error)];
  }
}

export async function logout() {
  try {
    const response = await instance.post("/logout");
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to logout user: ", error)];
  }
}

export function isAuthenticated() {
  const token = fromLocalStorage("access");
  return !!token;
}
