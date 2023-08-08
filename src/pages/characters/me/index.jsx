import React, { useEffect, useState } from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { OrganismNav } from "@/devlink/OrganismNav";
import { OrganismPersoList } from "@/devlink/OrganismPersoList";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PagePersoList.module.css";
import { listCharacters } from "@/services/character.service";
import { MoleculePersoListCard } from "@/devlink";

function CharactersPage({ as: _Component = _Builtin.Block }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch the characters data from the API using the listCharacters service
    listCharacters()
      .then(([data, error]) => {
        setCharacters(data);
      })
      .catch(([data, error]) => console.log(error));
  }, []);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          navActionWrapperVisibility={false}
          navLinkWrapperVisibility={true}
        />
        <OrganismPersoList
          personnagesListWrapperSlot={
            <>
              {characters?.map((character) => (
                <MoleculePersoListCard
                  key={character.id}
                  pseudoText={character.name}
                  classText={character.class.type}
                  cardPersonnageLink={{ href: `/characters/${character.id}` }}
                />
              ))}
            </>
          }
        />
      </_Builtin.Block>
    </_Component>
  );
}

export default CharactersPage;
