import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsButtonIcon.module.css";

export function AtomsButtonIcon({
  as: _Component = _Builtin.Link,
  buttonRuntimeProps = {},
  editLink = { href: "#" },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "is-icon")}
      button={false}
      options={editLink}
      {...buttonRuntimeProps}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "buttin-icon-img")}
        loading="lazy"
        width="auto"
        height="auto"
        src="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce18117c4a50c7408aa919_Mode%20edit.svg"
      />
    </_Component>
  );
}
