const initialState = {
  characters: [],
  loading: true,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "createCharacter":
      return {
        ...state,
        createCharacterData: action.payload,
        loading: false,
      };

    case "listCharacters":
      return {
        ...state,
        charactersData: action.payload,
        loading: false,
      };

    case "getCharacter":
      return {
        ...state,
        characterData: action.payload,
        loading: false,
      };

    case "updateCharacter":
      return {
        ...state,
        updatedData: action.payload,
        loading: false,
      };

    case "deleteCharacter":
      return {
        ...state,
        characterData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default charactersReducer;
