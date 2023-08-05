import React from "react";
import { getCharacter } from "@/services/character.service";

async function Page({ params }) {
  const character = await getServerSideProps(params.id);
  return (
    <div className="wrapper">
      <h1>My Character</h1>
      <div>
        <h1>{character?.name}</h1>
      </div>
    </div>
  );
}

export default Page;

export async function getServerSideProps(id) {
  const [character, characterError] = await getCharacter(id);
  if (characterError) {
    console.log(characterError);
  }
  return character;
}
