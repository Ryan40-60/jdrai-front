export function addToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function fromLocalStorage(key) {
  if (typeof window !== "undefined" && window.localStorage) {
    const response = localStorage.getItem(key);
    if (!response) {
      return null;
    }
    return JSON.parse(response);
  }
}
