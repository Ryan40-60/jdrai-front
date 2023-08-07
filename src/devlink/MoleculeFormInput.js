import React from "react";
import * as _Builtin from "./_Builtin";
import { AtomsLabels } from "./AtomsLabels";
import { AtomsInputText } from "./AtomsInputText";
import * as _utils from "./utils";
import _styles from "./MoleculeFormInput.module.css";

export function MoleculeFormInput({
  as: _Component = _Builtin.Block,
  label = "label",
  placeholder = "placeholder...",
}) {
  return (
    <_Component className={_utils.cx(_styles, "input-wrapper")} tag="div">
      <AtomsLabels />
      <AtomsInputText formInputId="Pseudo" />
    </_Component>
  );
}
