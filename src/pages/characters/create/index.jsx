import React, { useEffect, useState } from "react";
import CharacterImage from "@/components/CharacterImage";
import CharacterClassSelect from "@/components/CharacterClassSelect";
import CharacterCreationDetail from "@/components/CharacterCreationDetail";
import { listCharacterClasses } from "@/services/characterClass.service";

function CharacterCreationPage() {
  const [characterClasses, setCharacterClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    fetchCharacterClasses();
  }, []);

  const fetchCharacterClasses = async () => {
    try {
      const [data, error] = await listCharacterClasses();
      if (error) {
        throw new Error(error);
      }
      setCharacterClasses(data);

      // Set the initial selected class to the first class if available
      if (data.length > 0) {
        setSelectedClass(data[0]);
      }
    } catch (error) {
      // Handle the error, e.g., show an error message or log the error
      console.error("Error fetching character classes:", error);
    }
  };

  const handleClassSelect = (characterClass) => {
    setSelectedClass(characterClass); // Update the selectedClass state when a button is clicked
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div>
        {/* Left Block: Character Class List */}
        <CharacterClassSelect
          characterClasses={characterClasses}
          selectedClass={selectedClass}
          handleClassSelect={handleClassSelect}
        />
      </div>

      {/* Right Block */}
      <div>
        {/* Top Right: Character Details */}
        <CharacterCreationDetail
          characterClasses={characterClasses}
          selectedClass={selectedClass}
        />
      </div>
      <div>
        {/* Bottom Right: Character Creation */}
        <CharacterImage selectedClass={selectedClass} />
      </div>
    </div>
  );
}

export default CharacterCreationPage;
