import axiosInstance from "@/config/axios.config";

/**
 * Update an authenticated user.
 *
 * @param {Object} user - Updated user data.
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function updateAuthenticatedUser(user) {
  try {
    const response = await axiosInstance.patch("/user/me", {
      user,
    });
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}

/**
 * Update a user by ID.
 *
 * @param {number} id - User ID.
 * @param {Object} user - Updated user data.
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function updateUser(id, user) {
  try {
    const response = await axiosInstance.patch(`/user/${id}`, {
      user,
    });
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}

/**
 * Delete an authenticated user.
 *
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function deleteAuthenticatedUser() {
  try {
    const response = await axiosInstance.delete("/user/me");
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}

/**
 * Delete a user by ID.
 *
 * @param {number} id - User ID.
 * @return {Promise<[Object, Error|null]>} A promise that resolves to an array
 * containing the response data or null and an error object or null.
 */
export async function deleteUser(id) {
  try {
    const response = await axiosInstance.delete(`/user/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, error.response];
  }
}
