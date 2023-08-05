"use client";

import React, { useState } from "react";
import CharacterClassButton from "./CharacterClassButton"; // Import the new component

function CharacterClassSelect({ characterClasses }) {
  const [selectedClass, setSelectedClass] = useState(null); // State to hold the selected class

  const handleClassSelect = (characterClass) => {
    setSelectedClass(characterClass); // Update the selectedClass state when a button is clicked
  };

  return (
    <div
      className="character-class-list"
      style={{
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        width: "7rem",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <ul>
        {characterClasses.map((characterClass) => (
          <li key={characterClass.id}>
            {/* Use the new CharacterClassButton component here */}
            <CharacterClassButton
              characterClass={characterClass}
              handleClassSelect={handleClassSelect}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterClassSelect;
