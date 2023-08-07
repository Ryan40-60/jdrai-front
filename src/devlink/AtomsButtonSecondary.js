import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsButtonSecondary.module.css";

export function AtomsButtonSecondary({
  as: _Component = _Builtin.Link,
  buttonText = "Button Text",

  buttonLink = {
    href: "#",
  },

  buttonRuntimeProps = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "is-secondary")}
      button={true}
      options={buttonLink}
      {...buttonRuntimeProps}
    >
      {buttonText}
    </_Component>
  );
}
