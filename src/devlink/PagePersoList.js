import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalStyles } from "./GlobalStyles";
import { OrganismNav } from "./OrganismNav";
import { OrganismPersoList } from "./OrganismPersoList";
import * as _utils from "./utils";
import _styles from "./PagePersoList.module.css";

export function PagePersoList({
  as: _Component = _Builtin.Block,
  disconnectRuntimeProps = {},
  creerPersonnageLink = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          disconnectRuntimeProps={disconnectRuntimeProps}
          navClassWrapperVisibility={false}
          navLinkWrapperVisibility={true}
          navEditButtonsWrapperVisibility={false}
          mondeLink={{
            href: "#",
          }}
        />
        <OrganismPersoList creerPersonnageLink={creerPersonnageLink} />
      </_Builtin.Block>
    </_Component>
  );
}
