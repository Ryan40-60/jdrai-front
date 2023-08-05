export function addToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function fromLocalStorage(key) {
  const response = localStorage.getItem(key);
  return JSON.parse(response);
}
