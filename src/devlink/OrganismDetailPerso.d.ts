import * as React from "react";
import * as Types from "./types";

declare function OrganismDetailPerso(props: {
  as?: React.ElementType;
  competenceSlot?: Types.Devlink.Slot;
  backButtonLink?: Types.Basic.Link;
  className?: React.ReactNode;
  classDescription?: React.ReactNode;
  pointLeft?: React.ReactNode;
  pseudo?: React.ReactNode;
  personnageImgImage?: Types.Asset.Image;
}): React.JSX.Element;
