import axiosInstance from "@/config/axios.config";
import { fromLocalStorage } from "./localStorage.service";

export async function register(data) {
  const userData = {
    username: data.username,
    email: data.email,
    password: data.password,
  };
  try {
    const response = await axiosInstance.post("/auth/register", userData);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to register user: ", error)];
  }
}

export async function login(data) {
  const body = {
    log: data.usernameOrEmail,
    password: data.password,
  };
  try {
    const response = await axiosInstance.post("/auth/login", body);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to log user: ", error)];
  }
}

export async function logout() {
  try {
    const response = await axiosInstance.post("/auth/logout");
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to logout user: ", error)];
  }
}

export function isAuthenticated() {
  const token = fromLocalStorage("access");
  return !!token;
}
