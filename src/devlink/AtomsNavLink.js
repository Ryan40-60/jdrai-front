import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsNavLink.module.css";

export function AtomsNavLink({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav-link", "background-color-card")}
      button={false}
      options={{
        href: "#",
      }}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "class-icon")}
        loading="lazy"
        width="auto"
        height="auto"
        src="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce3e2bd5dcc1f6fd10f6e0_perso.png"
      />
      <_Builtin.Block tag="div">{"Perso."}</_Builtin.Block>
    </_Component>
  );
}
