import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { getCharacter, deleteCharacter } from "@/services/character.service";
import * as _Builtin from "@/devlink/_Builtin";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { MoleculeCompetenceCard } from "@/devlink/MoleculeCompetenceCard";
import { OrganismDetailPerso } from "@/devlink/OrganismDetailPerso";
import { OrganismNav } from "@/devlink/OrganismNav";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PageGenerateur.module.css";

// Page component definition
function Page({ as: _Component = _Builtin.Block }) {
  const { user } = useContext(AuthContext); // Access user data from context
  const router = useRouter(); // Initialize router

  // Redirect to registration page if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/register");
    }
  }, [user, router]);

  const characterId = router.query.id; // Get character ID from router query
  const [character, setCharacter] = useState(null); // State to store character data
  const [competences, setCompetences] = useState([
    { id: "0", type: "Force", value: 0 },
    { id: "1", type: "Agilité", value: 0 },
    { id: "2", type: "Charisme", value: 0 },
    { id: "3", type: "Chance", value: 0 },
  ]);

  useEffect(() => {
    setCompetences([
      { id: "0", type: "Force", value: character?.strength },
      { id: "1", type: "Agilité", value: character?.agility },
      { id: "2", type: "Charisme", value: character?.charisma },
      { id: "3", type: "Chance", value: character?.luck },
    ]);
  }, [character]);

  // Function to delete the current character
  const deleteCurrentCharacter = () => {
    const shouldDelete = window.confirm(
      `Êtes-vous sûr de vouloir supprimer ${character.name}?`
    );
    if (shouldDelete) {
      deleteCharacter(characterId)
        .then(([data, error]) => {
          console.log(data);
          router.push("/characters/me");
        })
        .catch(([data, error]) => console.log(error));
    }
  };

  // Fetch character data from the API when characterId changes
  useEffect(() => {
    getCharacter(characterId)
      .then(([data, error]) => {
        setCharacter(data);
      })
      .catch(([data, error]) => console.log(error));
  }, [characterId]);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles /> {/* Apply global styles */}
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          navEditButtonsWrapperVisibility={true}
          navButtonsWrapperVisibility={false}
          navLinkWrapperVisibility={false}
          navClassWrapperVisibility={false}
          editLink={{ href: `/characters/update/${character?.id}` }}
          deleteRuntimeProps={{ onClick: deleteCurrentCharacter }}
        />{" "}
        {/* Navigation component */}
        <OrganismDetailPerso
          pseudo={character?.name}
          className={character?.class.type}
          backButtonLink={{
            href: "/characters/me",
          }}
          competenceSlot={competences.map((competence) => (
            <MoleculeCompetenceCard
              key={competence.id}
              statTitre={competence.type}
              competenceNumberId={competence.id}
              isDisabled={true}
              skillValue={competence.value}
            />
          ))}
        />{" "}
        {/* Detail component for character */}
      </_Builtin.Block>
    </_Component>
  );
}

export default Page;
