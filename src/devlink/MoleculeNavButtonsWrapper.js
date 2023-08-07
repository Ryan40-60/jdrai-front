import React from "react";
import * as _Builtin from "./_Builtin";
import { AtomsButtonProfil } from "./AtomsButtonProfil";
import { AtomsButtonIconWarning } from "./AtomsButtonIconWarning";
import * as _utils from "./utils";
import _styles from "./MoleculeNavButtonsWrapper.module.css";

export function MoleculeNavButtonsWrapper({
  as: _Component = _Builtin.Block,
  navButtonsWrapperSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "nav-buttons_wrapper")} tag="div">
      <AtomsButtonProfil />
      <AtomsButtonIconWarning buttonWarningIcon="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce3a7a31615eaba34b78ef_Exit%20to%20app.svg" />
    </_Component>
  );
}
