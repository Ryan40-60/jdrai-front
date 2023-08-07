import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonWarning.module.css";

export function ButtonWarning({
  as: _Component = _Builtin.Link,
  buttonText = "Button Text",
  buttonRuntimeProps = {},

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "is-warning")}
      button={true}
      options={buttonLink}
      {...buttonRuntimeProps}
    >
      {buttonText}
    </_Component>
  );
}
