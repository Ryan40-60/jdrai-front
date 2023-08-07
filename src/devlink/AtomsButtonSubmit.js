import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsButtonSubmit.module.css";

export function AtomsButtonSubmit({
  as: _Component = _Builtin.FormButton,
  buttonRuntimeProps = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button")}
      type="submit"
      value="Valider"
      data-wait="Veuillez patienter..."
      {...buttonRuntimeProps}
    />
  );
}
