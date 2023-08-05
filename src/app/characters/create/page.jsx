import React from "react";
import CharacterImage from "@/components/CharacterImage";
import CharacterClassSelect from "@/components/CharacterClassSelect";
import CharacterCreationDetail from "@/components/CharacterCreationDetail";
import { listCharacterClasses } from "@/services/characterClass.service";

async function CharacterCreationPage() {
  const characterClasses = await getServerSideProps();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div>
        {/* Left Block: Character Class List */}
        <CharacterClassSelect characterClasses={characterClasses} />
      </div>

      {/* Right Block */}
      <div>
        {/* Top Right: Character Details */}
        <CharacterCreationDetail characterClasses={characterClasses} />
      </div>
      <div>
        {/* Bottom Right: Character Creation */}
        <CharacterImage characterName="Name" />
      </div>
    </div>
  );
}

export default CharacterCreationPage;

export async function getServerSideProps() {
  // Fetch the character classes from the database using the listCharacterClasses service
  const [characterClasses, characterError] = await listCharacterClasses();
  if (characterError) {
    throw characterError;
  }
  return characterClasses;
}
