import React from "react";
import * as _Builtin from "./_Builtin";
import { AtomsButtonMain } from "./AtomsButtonMain";
import { MoleculePersoListCard } from "./MoleculePersoListCard";
import * as _utils from "./utils";
import _styles from "./OrganismPersoList.module.css";

export function OrganismPersoList({
  as: _Component = _Builtin.Block,
  personnagesListWrapperSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "screen-content")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "personnages-list",
          "background-color-paper",
          "padding-medium"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "personnages-titre_wrapper",
            "margin-bottom",
            "margin-xsmall"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "generateur-titre")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-size-tiny")}
              tag="div"
            >
              {"Mes personnages"}
            </_Builtin.Block>
            <_Builtin.Heading tag="h2">
              {"Mes personnages"}
              <br />
            </_Builtin.Heading>
          </_Builtin.Block>
          <AtomsButtonMain
            buttonMainText="Créer un personnage"
            buttonMainRuntimeProps={{}}
          />
        </_Builtin.Block>
        <_Builtin.Block
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
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
