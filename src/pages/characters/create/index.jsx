import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { listCharacterClasses } from "@/services/characterClass.service";
import * as _Builtin from "@/devlink/_Builtin";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { OrganismNav } from "@/devlink/OrganismNav";
import { OrganismGenerateurPersonnage } from "@/devlink/OrganismGenerateurPersonnage";
import { AtomsNavLink } from "@/devlink/AtomsNavLink";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PageGenerateur.module.css";

// CharacterCreationPage component definition
function CharacterCreationPage({ as: _Component = _Builtin.Block }) {
  const router = useRouter(); // Initialize router
  const { user } = useContext(AuthContext); // Access user data from context

  // Redirect to registration page if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/register");
    }
  }, [user, router]);

  const [characterClasses, setCharacterClasses] = useState([]); // State for character classes
  const [selectedClass, setSelectedClass] = useState(null); // State for selected class

  const competences = ["Force", "Agilité", "Charisme", "Chance"];

  // const character = body;

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

  // Fetch character classes on component mount
  useEffect(() => {
    fetchCharacterClasses();
  }, []);

  // Function to fetch character classes from the API
  const fetchCharacterClasses = async () => {
    try {
      const [data, error] = await listCharacterClasses();
      if (error) {
        throw new Error(error);
      }
      setCharacterClasses(data);

      // Set the initial selected class to the first class if available
      if (data.length > 0) {
        setSelectedClass(data[0]);
      }
    } catch (error) {
      // Handle the error, e.g., show an error message or log the error
      console.error("Error fetching character classes:", error);
    }
  };

  // Function to handle class selection
  const handleClassSelect = (characterClass) => {
    setSelectedClass(characterClass); // Update the selectedClass state when a button is clicked
  };

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles /> {/* Apply global styles */}
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          navButtonsWrapperVisibility={true}
          navLinkWrapperVisibility={false}
          navClassWrapperVisibility={true}
          navEditButtonsWrapperVisibility={false}
          disconnectRuntimeProps={{ onClick: logoutUser }}
          profilLink={{ href: "/profil" }}
          navActionWrapperSlot={
            <>
              {characterClasses?.map((characterClass) => (
                <AtomsNavLink
                  key={characterClass.id}
                  navLinkRuntimeProps={{ onClick: handleClassSelect }}
                  navLinkText={characterClass.type}
                  navLinkIcon={`/assets/${characterClass.type}.svg`}
                />
              ))}
            </>
          }
        />{" "}
        {/* Navigation component */}
        <OrganismGenerateurPersonnage
          className={selectedClass?.type}
          backButtonLink={{ href: "/characters/me" }}
          pointLeft="100"
        />{" "}
        {/* Detail component for character generation */}
      </_Builtin.Block>
    </_Component>
  );
}

export default CharacterCreationPage;
