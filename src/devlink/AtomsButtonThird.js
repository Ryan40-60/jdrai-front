import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsButtonThird.module.css";

export function AtomsButtonThird({
  as: _Component = _Builtin.Link,
  buttonText = "Button Text",

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "is-third")}
      button={true}
      options={buttonLink}
    >
      {buttonText}
    </_Component>
  );
}
