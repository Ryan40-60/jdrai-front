import * as React from "react";
import * as Types from "./types";

declare function OrganismGenerateurPersonnage(props: {
  as?: React.ElementType;
  competenceSlot?: Types.Devlink.Slot;
  backButtonLink?: Types.Basic.Link;
  classDescription?: React.ReactNode;
  className?: React.ReactNode;
  updatedName?: React.ReactNode;
  isUpdate?: Types.Visibility.VisibilityConditions;
  generateRuntimeProps?: Types.Devlink.RuntimeProps;
  onSubmitRuntimeProps?: Types.Devlink.RuntimeProps;
  nameRuntimeProps?: Types.Devlink.RuntimeProps;
  pointLeft?: React.ReactNode;
  personnageImgImage?: Types.Asset.Image;
}): React.JSX.Element;
