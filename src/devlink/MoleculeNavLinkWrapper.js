import React from "react";
import * as _Builtin from "./_Builtin";
import { AtomsNavLink } from "./AtomsNavLink";
import * as _utils from "./utils";
import _styles from "./MoleculeNavLinkWrapper.module.css";

export function MoleculeNavLinkWrapper({
  as: _Component = _Builtin.Block,
  navLinkWrapperSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "nav-action_wrapper")} tag="div">
      {navLinkWrapperSlot ?? <AtomsNavLink navLinkText="link" />}
    </_Component>
  );
}
