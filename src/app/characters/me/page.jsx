import React from "react";
import Link from "next/link";
import { listCharacters } from "@/services/character.service";

async function Page() {
  const characters = await getServerSideProps();
  return (
    <div className="wrapper">
      <h1>My Characters</h1>
      <div>
        {characters?.map((character) => (
          <Link key={character.id} href={`/characters/${character.id}`}>
            <button>{character.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const [characters, characterError] = await listCharacters();
  if (characterError) {
    console.log(characterError);
  }
  return characters;
}

export default Page;
