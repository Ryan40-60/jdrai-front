import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsInputText.module.css";

export function AtomsInputText({
  as: _Component = _Builtin.FormTextInput,
  formInputId = "Pseudo-3",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "form_input")}
      autoFocus={false}
      maxLength={256}
      name="Pseudo"
      data-name="Pseudo"
      placeholder="Votre pseudo..."
      type="text"
      disabled={false}
      required={true}
      id={formInputId}
    />
  );
}
