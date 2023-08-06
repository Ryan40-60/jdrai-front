import React from "react";
import Link from "next/link";

function CharacterCreationDetail({ characterClasses, selectedClass }) {
  // For demonstration, you can use the selected class to get the total skill points
  const totalSkillPoints =
    selectedClass?.strength +
    selectedClass?.agility +
    selectedClass?.charisma +
    selectedClass?.luck;

  return (
    <div
      className="character-details"
      style={{
        paddingLeft: "7rem",
        width: "85%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "4rem",
      }}
    >
      {/* Link button to return to the character class list */}
      <Link href="/characters/me">My characters</Link>

      {/* Character class type and description */}
      <h2>{selectedClass?.class}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
        temporibus recusandae architecto repellat.
      </p>

      {/* Skill points section */}
      <div className="skill-points">
        <h3>Skill Points</h3>
        <p>Points Remaining: {totalSkillPoints}</p>

        {/* Points for each type */}
        <div className="skill-point-types">
          <div className="skill-point-type">
            <h4>Strength</h4>
            <input type="number" value={selectedClass?.strength} disabled />
          </div>
          <div className="skill-point-type">
            <h4>Agility</h4>
            <input type="number" value={selectedClass?.agility} disabled />
          </div>
          <div className="skill-point-type">
            <h4>Charisma</h4>
            <input type="number" value={selectedClass?.charisma} disabled />
          </div>
          <div className="skill-point-type">
            <h4>Luck</h4>
            <input type="number" value={selectedClass?.luck} disabled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCreationDetail;
