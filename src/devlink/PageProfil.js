import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalStyles } from "./GlobalStyles";
import { OrganismNav } from "./OrganismNav";
import { OrganismProfil } from "./OrganismProfil";
import * as _utils from "./utils";
import _styles from "./PageProfil.module.css";

export function PageProfil({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          navClassWrapperVisibility={false}
          navLinkWrapperVisibility={true}
          navEditButtonsWrapperVisibility={false}
        />
        <OrganismProfil />
      </_Builtin.Block>
    </_Component>
  );
}
