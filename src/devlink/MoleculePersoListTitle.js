import React from "react";
import * as _Builtin from "./_Builtin";
import { AtomsButtonMain } from "./AtomsButtonMain";
import * as _utils from "./utils";
import _styles from "./MoleculePersoListTitle.module.css";

export function MoleculePersoListTitle({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "personnages-titre_wrapper",
        "margin-bottom",
        "margin-xsmall"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "generateur-titre")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-size-tiny")}
          tag="div"
        >
          {"Mes personnages"}
        </_Builtin.Block>
        <_Builtin.Heading tag="h2">
          {"Mes personnages"}
          <br />
        </_Builtin.Heading>
      </_Builtin.Block>
      <AtomsButtonMain buttonMainText="Créer un personnage" />
    </_Component>
  );
}
