import React from "react";

function CharacterClassButton({ characterClass, handleClassSelect }) {
  return (
    <button onClick={() => handleClassSelect(characterClass)}>
      {characterClass.class}
    </button>
  );
}

export default CharacterClassButton;
