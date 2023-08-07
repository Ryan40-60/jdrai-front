import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsButtonMain.module.css";

export function AtomsButtonMain({
  as: _Component = _Builtin.Link,
  buttonMainText = "Button Text",

  buttonMainLink = {
    href: "#",
  },

  buttonMainRuntimeProps = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button")}
      button={true}
      options={buttonMainLink}
      {...buttonMainRuntimeProps}
    >
      {buttonMainText}
    </_Component>
  );
}
