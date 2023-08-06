import React, { useState } from "react";
import Image from "next/image";
import { createCharacter } from "@/services/character.service";
import { useRouter } from "next/router";

function CharacterImage({ selectedClass }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    characterName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCreateCharacter = async (event) => {
    event.preventDefault();
    if (formData.characterName.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      try {
        const [characterData, characterError] = await createCharacter({
          characterClassId: selectedClass.id,
          name: formData.characterName,
        });
        if (characterError) {
          console.log("Creation failed:", characterError);
        } else {
          console.log(`Creating character: ${characterData}`);

          // Redirect the user to a dashboard page or any other desired page
          // You can use the Next.js Router for client-side navigation
          // For example:
          router.push(`/characters/${characterData.id}`);
        }
      } catch (error) {
        console.log("Error occurred while creation:", error);
      }
    }
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
        height={350}
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
          value={formData.characterName}
          onChange={handleChange}
          placeholder="My username..."
          required
        />
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
}

export default CharacterImage;
