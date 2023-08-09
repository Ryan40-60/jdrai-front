import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalStyles } from "./GlobalStyles";
import { OrganismNav } from "./OrganismNav";
import { OrganismDetailPerso } from "./OrganismDetailPerso";
import * as _utils from "./utils";
import _styles from "./PageDetailPerso.module.css";

export function PageDetailPerso({
  as: _Component = _Builtin.Block,
  deleteRuntimeProps = {},
  editRuntimeProps = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          deleteRuntimeProps={deleteRuntimeProps}
          navButtonsWrapperVisibility={false}
          navLinkWrapperVisibility={false}
          navClassWrapperVisibility={true}
        />
        <OrganismDetailPerso
          backButtonLink={{
            href: "#",
          }}
        />
      </_Builtin.Block>
    </_Component>
  );
}
