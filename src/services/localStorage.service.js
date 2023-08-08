/**
 * Adds an item to the browser's local storage.
 *
 * @param {string} key - The key under which to store the value.
 * @param {*} value - The value to store in local storage.
 */
export function addToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieves an item from the browser's local storage.
 *
 * @param {string} key - The key of the item to retrieve.
 * @return {*} The retrieved value, or null if the key is not found.
 */
export function fromLocalStorage(key) {
  if (typeof window !== "undefined" && window.localStorage) {
    const response = localStorage.getItem(key);
    if (!response) {
      return null;
    }
    return JSON.parse(response);
  }
}

/**
 * Removes an item from the browser's local storage.
 *
 * @param {string} key - The key of the item to remove.
 */
export function removeFromLocalStorage(key) {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from local storage:", error);
    }
  }
}
