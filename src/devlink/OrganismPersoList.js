import React from "react";
import * as _Builtin from "./_Builtin";
import { MoleculePersoListTitle } from "./MoleculePersoListTitle";
import { MoleculePersoListCardWrapper } from "./MoleculePersoListCardWrapper";
import * as _utils from "./utils";
import _styles from "./OrganismPersoList.module.css";

export function OrganismPersoList({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "personnages-list",
        "background-color-paper",
        "padding-medium"
      )}
      tag="div"
    >
      <MoleculePersoListTitle />
      <MoleculePersoListCardWrapper />
    </_Component>
  );
}
