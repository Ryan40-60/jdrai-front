import axiosInstance from "@/config/axios.config";

/**
 * Create a new character.
 *
 * @param {Object} character - Character data.
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function createCharacter(character) {
  try {
    const response = await axiosInstance.post("/character", { ...character });
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}

/**
 * List all characters.
 *
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function listCharacters() {
  try {
    const response = await axiosInstance.get("/character");
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}

/**
 * Get a specific character by ID.
 *
 * @param {number} id - Character ID.
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function getCharacter(id) {
  try {
    const response = await axiosInstance.get(`/character/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}

/**
 * Update a character by ID.
 *
 * @param {number} id - Character ID.
 * @param {Object} character - Updated character data.
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function updateCharacter(id, character) {
  try {
    const response = await axiosInstance.patch(`/character/${id}`, {
      ...character,
    });
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}

/**
 * Delete a character by ID.
 *
 * @param {number} id - Character ID.
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function deleteCharacter(id) {
  try {
    const response = await axiosInstance.delete(`/character/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}
