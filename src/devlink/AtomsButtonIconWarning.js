import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsButtonIconWarning.module.css";

export function AtomsButtonIconWarning({
  as: _Component = _Builtin.Link,
  buttonWarningRuntimeProps = {},
  buttonWarningIcon = "https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce1785090550f27ad94614_Delete.svg",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "is-icon", "is-warning")}
      button={false}
      options={{
        href: "#",
      }}
      {...buttonWarningRuntimeProps}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "buttin-icon-img")}
        loading="lazy"
        width="auto"
        height="auto"
        src={buttonWarningIcon}
      />
    </_Component>
  );
}
