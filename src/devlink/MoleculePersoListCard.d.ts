import * as React from "react";
import * as Types from "./types";

declare function MoleculePersoListCard(props: {
  as?: React.ElementType;
  personnagePhotoImage?: Types.Asset.Image;
  pseudoText?: React.ReactNode;
  classText?: React.ReactNode;
  cardPersonnageLink?: Types.Basic.Link;
}): React.JSX.Element;
