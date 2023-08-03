import React, { useEffect, useState } from "react";

import { getCharacter } from "@/services/character.service";

function App() {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    (async () => {
      const [character, characterError] = await getCharacter(
        "68860d67-0280-46a6-aa04-a001ba3645a2"
      );
      if (characterError) {
        console.log(characterError);
      }
      setCharacter(character);
    })();
  }, []);
  return (
    <div className="wrapper">
      <h1>My Character</h1>
      <div>
        <h1>{character?.name}</h1>
      </div>
      {/* <ul>
        {list.map((item) => (
          <li key={item.item}>{item.item}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
