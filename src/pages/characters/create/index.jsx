import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { logout } from "@/services/auth.service";
import { removeFromLocalStorage } from "@/services/localStorage.service";
import { listCharacterClasses } from "@/services/characterClass.service";
import * as _Builtin from "@/devlink/_Builtin";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { OrganismNav } from "@/devlink/OrganismNav";
import { OrganismGenerateurPersonnage } from "@/devlink/OrganismGenerateurPersonnage";
import { AtomsNavLink } from "@/devlink/AtomsNavLink";
import { MoleculeCompetenceCard } from "@/devlink/MoleculeCompetenceCard";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PageGenerateur.module.css";
import { createCharacter } from "@/services/character.service";

// CharacterCreationPage component definition
function CharacterCreationPage({ as: _Component = _Builtin.Block }) {
  const router = useRouter(); // Initialize router
  const { user, setUser, setRefreshToken, setAccessToken } =
    useContext(AuthContext);

  // Redirect to registration page if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const [characterClasses, setCharacterClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [pool, setPool] = useState(100);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorLabel, setErrorLabel] = useState(null);

  const [competences, setCompetences] = useState([
    { id: "0", type: "Force", value: 0 },
    { id: "1", type: "Agilité", value: 0 },
    { id: "2", type: "Charisme", value: 0 },
    { id: "3", type: "Chance", value: 0 },
  ]);

  const [formData, setFormData] = useState({
    competence0: "0",
    competence1: "0",
    competence2: "0",
    competence3: "0",
    pseudo: "",
  });

  // Update form data on input change
  const handleChange = (e) => {
    setIsError(false);
    setErrorLabel(null);
    setIsSuccess(false);
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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

  /**
   * @description Handles the update of skill points and competences based on user input.
   * @param {Object} e - The event object triggered by the input change.
   */
  const handleSkillAllocation = (e) => {
    const currentCompetenceId = competences.findIndex(
      (c) => c.id === e.target.id
    );
    const oldValue = competences[currentCompetenceId].value;
    let newValue = +e.target.value > 0 ? +e.target.value : 0;
    let poolValue = pool;

    // Update skill points and competences
    poolValue += oldValue;
    poolValue -= newValue;

    // Adjust values if skill points are insufficient
    if (poolValue < 0) {
      newValue += poolValue;
      poolValue = 0;
    }

    // Update competences and input value
    competences[currentCompetenceId].value = newValue;
    e.target.value = newValue;
    setPool(poolValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pool > 0) {
      const hasPoints = window.confirm(
        `Il vous reste ${pool} points de compétences, voulez-vous tout de même créer ce personnage ?`
      );
      if (hasPoints) {
        const characterBody = {
          characterClassId: selectedClass.id,
          name: formData.pseudo,
          strength: formData.competence0,
          agility: formData.competence1,
          charisma: formData.competence2,
          luck: formData.competence3,
        };
        const [characterData, error] = await createCharacter(characterBody);
        if (error) {
          setIsError(true);
          setErrorLabel(error.data.message);
        } else {
          setIsSuccess(true);
          setTimeout(() => {
            router.push(`/characters/${characterData.id}`);
          }, 750);
        }
      }
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
                  navLinkRuntimeProps={{
                    onClick: () => handleClassSelect(characterClass),
                  }}
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
          pointLeft={pool}
          isUpdate={false}
          isError={isError}
          isSuccess={isSuccess}
          errorChipLabel={errorLabel}
          successChipLabel={"Personnage créé avec succès..."}
          onSubmitRuntimeProps={{
            onChange: handleChange,
            onSubmit: handleSubmit,
          }}
          competenceSlot={competences.map((competence) => (
            <MoleculeCompetenceCard
              key={competence.id}
              statTitre={competence.type}
              competenceNumberId={competence.id}
              competenceRuntimeProps={{ onChange: handleSkillAllocation }}
              skillValue={competence.value}
            />
          ))}
        />{" "}
        {/* Detail component for character generation */}
      </_Builtin.Block>
    </_Component>
  );
}

export default CharacterCreationPage;
