import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalStyles } from "./GlobalStyles";
import { OrganismNav } from "./OrganismNav";
import { OrganismGenerateurPersonnage } from "./OrganismGenerateurPersonnage";
import * as _utils from "./utils";
import _styles from "./PageGenerateur.module.css";

export function PageGenerateur({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          navButtonsWrapperVisibility={false}
          navLinkWrapperVisibility={false}
          navActionWrapperVisibility={true}
        />
        <OrganismGenerateurPersonnage />
      </_Builtin.Block>
    </_Component>
  );
}
