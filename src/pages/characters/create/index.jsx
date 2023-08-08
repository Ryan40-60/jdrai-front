import React, { useEffect, useState } from "react";
import CharacterImage from "@/components/CharacterImage";
import CharacterClassSelect from "@/components/CharacterClassSelect";
import CharacterCreationDetail from "@/components/CharacterCreationDetail";
import { listCharacterClasses } from "@/services/characterClass.service";
import * as _Builtin from "@/devlink/_Builtin";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { OrganismNav } from "@/devlink/OrganismNav";
import { OrganismGenerateurPersonnage } from "@/devlink/OrganismGenerateurPersonnage";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PageGenerateur.module.css";

function CharacterCreationPage({ as: _Component = _Builtin.Block }) {
  const [characterClasses, setCharacterClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    fetchCharacterClasses();
  }, []);

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

  const handleClassSelect = (characterClass) => {
    setSelectedClass(characterClass); // Update the selectedClass state when a button is clicked
  };

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
          navEditButtonsWrapperVisibility={false}
        />
        <OrganismGenerateurPersonnage />
      </_Builtin.Block>
    </_Component>

    // <div style={{ display: "flex", height: "100%" }}>
    //   <div>
    //     {/* Left Block: Character Class List */}
    //     <CharacterClassSelect
    //       characterClasses={characterClasses}
    //       selectedClass={selectedClass}
    //       handleClassSelect={handleClassSelect}
    //     />
    //   </div>

    //   {/* Right Block */}
    //   <div>
    //     {/* Top Right: Character Details */}
    //     <CharacterCreationDetail
    //       characterClasses={characterClasses}
    //       selectedClass={selectedClass}
    //     />
    //   </div>
    //   <div>
    //     {/* Bottom Right: Character Creation */}
    //     <CharacterImage selectedClass={selectedClass} />
    //   </div>
    // </div>
  );
}

export default CharacterCreationPage;
