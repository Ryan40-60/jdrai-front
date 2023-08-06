import axios from "axios";
import { fromLocalStorage } from "./localStorage.service";

const BASE_URL = "http://localhost:3000";

const instance = axios.create({
  baseURL: `${BASE_URL}/character`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// Add an interceptor to include the authorization header
instance.interceptors.request.use(
  (config) => {
    const accessToken = fromLocalStorage("access");
    console.log(accessToken);
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken.token}`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function createCharacter(character) {
  try {
    const response = await instance.post("/", { ...character });
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to create character: ", error)];
  }
}

export async function listCharacters() {
  try {
    const response = await instance.get("/");
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to fetch characters: ", error)];
  }
}

export async function getCharacter(id) {
  try {
    const response = await instance.get(`/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to fetch character: ", error)];
  }
}

export async function updateCharacter(id, character) {
  try {
    const response = await instance.patch(`/${id}`, { character });
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to update character: ", error)];
  }
}

export async function deleteCharacter(id) {
  try {
    const response = await instance.delete(`/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to delete character: ", error)];
  }
}
