import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { listCharacters } from "@/services/character.service";
import { removeFromLocalStorage } from "@/services/localStorage.service";
import { logout } from "@/services/auth.service";
import * as _Builtin from "@/devlink/_Builtin";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { OrganismNav } from "@/devlink/OrganismNav";
import { OrganismPersoList } from "@/devlink/OrganismPersoList";
import { MoleculePersoListCard } from "@/devlink";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PagePersoList.module.css";

function CharactersPage({ as: _Component = _Builtin.Block }) {
  const router = useRouter();
  const { user, setUser, setRefreshToken, setAccessToken } =
    useContext(AuthContext);

  // Redirect to login page if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const [characters, setCharacters] = useState([]);

  // Function to handle user logout
  const logoutUser = () => {
    const shouldLogout = window.confirm(
      "Êtes-vous sûr de vouloir vous déconnecter ?"
    );
    if (shouldLogout) {
      logout().then(([data, error]) => {
        console.log(data);

        // Clear tokens and user data from local storage
        removeFromLocalStorage("user");
        removeFromLocalStorage("access");
        removeFromLocalStorage("refresh");
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
      });
    }
  };

  // Fetch characters on component mount
  useEffect(() => {
    listCharacters()
      .then(([data, error]) => {
        setCharacters(data);
      })
      .catch(([data, error]) => console.log(error));
  }, []);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles /> {/* Apply global styles */}
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          navActionWrapperVisibility={false}
          navButtonsWrapperVisibility={true}
          navLinkWrapperVisibility={false}
          navEditButtonsWrapperVisibility={false}
          disconnectRuntimeProps={{ onClick: logoutUser }}
          profilLink={{ href: "/profil" }}
        />
        <OrganismPersoList
          personnagesListWrapperSlot={
            <>
              {/* Map characters to list of cards */}
              {characters?.map((character) => (
                <MoleculePersoListCard
                  key={character.id}
                  pseudoText={character.name}
                  classText={character.class.type}
                  cardPersonnageLink={{ href: `/characters/${character.id}` }} // Link to character details
                />
              ))}
            </>
          }
          creerPersonnageLink={{ href: "create" }}
        />
      </_Builtin.Block>
    </_Component>
  );
}

export default CharactersPage;
