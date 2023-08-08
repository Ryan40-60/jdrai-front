import axiosInstance from "@/config/axios.config";

export async function createCharacter(character) {
  try {
    const response = await axiosInstance.post("/character", { ...character });
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to create character: ", error)];
  }
}

export async function listCharacters() {
  try {
    const response = await axiosInstance.get("/character");
    console.log(response);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to fetch characters: ", error)];
  }
}

export async function getCharacter(id) {
  try {
    const response = await axiosInstance.get(`/character/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to fetch character: ", error)];
  }
}

export async function updateCharacter(id, character) {
  try {
    const response = await axiosInstance.patch(`/character/${id}`, {
      character,
    });
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to update character: ", error)];
  }
}

export async function deleteCharacter(id) {
  try {
    const response = await axiosInstance.delete(`/character/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to delete character: ", error)];
  }
}
