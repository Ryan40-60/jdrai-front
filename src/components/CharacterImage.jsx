"use client";

import React from "react";
import Image from "next/image";

function CharacterImage({ characterName }) {
  const handleCreateCharacter = (event) => {
    event.preventDefault();
    // Handle character creation logic here using the characterName prop
    // For example, you can call a service to create the character on the server-side
    console.log(`Creating character with name: ${characterName}`);
  };

  return (
    <div
      className="character-creation"
      style={{ width: "85%", height: "100%", marginLeft: "15%" }}
    >
      {/* Image display using Next.js Image component */}
      <Image
        src="/character-image.png"
        alt="Character"
        width={400}
        height={300}
      />

      {/* "Generate with AI" button */}
      <button>Generate with AI</button>

      {/* Character creation form */}
      <form onSubmit={handleCreateCharacter}>
        <label htmlFor="characterName">Character Name:</label>
        <input
          type="text"
          id="characterName"
          name="characterName"
          onChange={() => {}}
          placeholder="My username..."
          required
        />
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
}

export default CharacterImage;
