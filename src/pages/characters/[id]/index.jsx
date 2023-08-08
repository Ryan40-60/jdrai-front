import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCharacter } from "@/services/character.service";
import Link from "next/link";
import * as _Builtin from "@/devlink/_Builtin";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { OrganismDetailPerso } from "@/devlink/OrganismDetailPerso";
import { OrganismNav } from "@/devlink/OrganismNav";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PageGenerateur.module.css";

function Page({ as: _Component = _Builtin.Block }) {
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
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          navButtonsWrapperVisibility={false}
          navLinkWrapperVisibility={false}
          navClassWrapperVisibility={true}
        />
        <OrganismDetailPerso
          pseudo={character.name}
          className={character.class.type}
          backButtonLink={{
            href: "/characters/me",
          }}
        />
      </_Builtin.Block>
    </_Component>

    // <div className="wrapper">
    //   <Link href="/characters/me">My characters</Link>
    //   <h1>Name: {character?.name}</h1>
    //   <div>
    //     <h2>Class: {character?.class.type}</h2>
    //     <div>
    //       <h4>Strength</h4>
    //       <p>{character?.class.strength}</p>
    //       <h4>Agility</h4>
    //       <p>{character?.class.agility}</p>
    //       <h4>Charisma</h4>
    //       <p>{character?.class.charisma}</p>
    //       <h4>Luck</h4>
    //       <p>{character?.class.luck}</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Page;
