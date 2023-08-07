import * as React from "react";
import * as Types from "./types";

declare function MoleculePersoListCard(props: {
  as?: React.ElementType;
  personnagePhotoImage?: Types.Asset.Image;
  pseudoText?: React.ReactNode;
  textSizeSmallText?: React.ReactNode;
  cardPersonnageRuntimeProps?: Types.Devlink.RuntimeProps;
  cardPersonnageLink?: Types.Basic.Link;
}): React.JSX.Element;
