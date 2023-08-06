import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCharacter } from "@/services/character.service";
import Link from "next/link";

function Page() {
  const router = useRouter();
  const characterId = router.query.id;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Fetch the character data from the API using the getCharacter service
    getCharacter(characterId)
      .then(([data, error]) => setCharacter(data))
      .catch(([data, error]) => console.log(error));
  }, [characterId]);

  return (
    <div className="wrapper">
      <Link href="/characters/me">My characters</Link>
      <h1>Name: {character?.name}</h1>
      <div>
        <h2>Class: {character?.class.class}</h2>
        <div>
          <h4>Strength</h4>
          <p>{character?.class.strength}</p>
          <h4>Agility</h4>
          <p>{character?.class.agility}</p>
          <h4>Charisma</h4>
          <p>{character?.class.charisma}</p>
          <h4>Luck</h4>
          <p>{character?.class.luck}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
