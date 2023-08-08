import axiosInstance from "@/config/axios.config";

/**
 * List all character classes.
 *
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function listCharacterClasses() {
  try {
    const response = await axiosInstance.get("/class");
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to fetch character classes: ", error)];
  }
}

/**
 * Get a specific character class by ID.
 *
 * @param {number} id - Character class ID.
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function getCharacterClass(id) {
  try {
    const response = await axiosInstance.get(`/class/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, new Error("Failed to fetch character class: ", error)];
  }
}
