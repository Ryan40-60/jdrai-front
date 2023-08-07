import React from "react";
import * as _Builtin from "./_Builtin";
import { MoleculePersoListCard } from "./MoleculePersoListCard";
import * as _utils from "./utils";
import _styles from "./MoleculePersoListCardWrapper.module.css";

export function MoleculePersoListCardWrapper({
  as: _Component = _Builtin.Block,
  personnagesListWrapperSlot,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "personnages-list_wrapper",
        "margin-top",
        "margin-medium"
      )}
      tag="div"
    >
      {personnagesListWrapperSlot ?? (
        <>
          <MoleculePersoListCard />
          <MoleculePersoListCard />
          <MoleculePersoListCard />
          <MoleculePersoListCard />
          <MoleculePersoListCard />
          <MoleculePersoListCard />
          <MoleculePersoListCard />
          <MoleculePersoListCard />
        </>
      )}
    </_Component>
  );
}
