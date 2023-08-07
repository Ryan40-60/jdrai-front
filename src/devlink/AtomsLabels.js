import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsLabels.module.css";

export function AtomsLabels({
  as: _Component = _Builtin.FormBlockLabel,
  labelText = "Pseudo",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "text-size-regular")}
      htmlFor="Pseudo-3"
    >
      {labelText}
    </_Component>
  );
}
