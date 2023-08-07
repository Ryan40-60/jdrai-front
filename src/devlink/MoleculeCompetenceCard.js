import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MoleculeCompetenceCard.module.css";

export function MoleculeCompetenceCard({
  as: _Component = _Builtin.Block,
  statTitre = (
    <>
      {"Heading"}
      <br />
    </>
  ),
  statDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  competenceNumberId = "field-2",
}) {
  return (
    <_Component className={_utils.cx(_styles, "competence-card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "competence-title")}
        tag="div"
      >
        <_Builtin.Heading tag="h3">{statTitre}</_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "text-size-small")}>
          {statDescription}
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "competence-point")}
        tag="div"
      >
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "input-hide")}
          autoFocus={false}
          maxLength={256}
          name="competence"
          data-name="competence"
          placeholder="Nombre ici"
          type="number"
          disabled={false}
          required={true}
          id="competence"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "points-card", "is-actif")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "points-card", "is-actif")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "points-card", "is-actif")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "points-card", "is-actif")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "points-card")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "points-card")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "points-card")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "points-card")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
