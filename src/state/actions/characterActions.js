export const createCharacter = (data) => {
  return {
    type: "createCharacter",
    payload: data,
  };
};

export const listCharacters = (userData) => {
  return {
    type: "listCharacters",
    payload: userData,
  };
};

export const getCharacter = (characterData) => {
  return {
    type: "getCharacter",
    payload: characterData,
  };
};

export const updateCharacter = (updatedData) => {
  return {
    type: "updateCharacter",
    payload: updatedData,
  };
};

export const deleteCharacter = (characterData) => {
  return {
    type: "deleteCharacter",
    payload: characterData,
  };
};
