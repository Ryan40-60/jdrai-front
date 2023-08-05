import axios from "axios";

const BASE_URL = "http://localhost:3000";

const instance = axios.create({
  baseURL: `${BASE_URL}/class`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export async function listCharacterClasses() {
  try {
    const response = await instance.get("/");
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to fetch character classes: ", error)];
  }
}

export async function getCharacterClass(id) {
  try {
    const response = await instance.get(`/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to fetch character class: ", error)];
  }
}
