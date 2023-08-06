import React, { useEffect, useState } from "react";
import Link from "next/link";
import { listCharacters } from "@/services/character.service";

function Page() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch the characters data from the API using the listCharacters service
    listCharacters()
      .then(([data, error]) => setCharacters(data))
      .catch(([data, error]) => console.log(error));
  }, []);

  if (characters.length === 0) {
    return (
      <div className="wrapper">
        <h1>My Characters</h1>
        <p>No characters found.</p>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1>My Characters</h1>
      <div>
        {characters.map((character) => (
          <Link key={character.id} href={`/characters/${character.id}`}>
            <button>{character.name}</button>
          </Link>
        ))}
        <Link href={"/characters/create"}>
          <button>New character</button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
