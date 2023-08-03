import axios from "axios";

const BASE_URL = "http://localhost:3000";

const instance = axios.create({
  baseURL: `${BASE_URL}/character`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export async function createCharacter(character) {
  try {
    const response = await instance.post("/", { character });
    return response.data;
  } catch (error) {
    throw new Error("Failed to create character");
  }
}

export async function listCharacters() {
  try {
    const response = await instance.get("/");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch characters");
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
    return response.data;
  } catch (error) {
    throw new Error("Failed to update character");
  }
}

export async function deleteCharacter(id) {
  try {
    const response = await instance.delete(`/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete character");
  }
}
