import * as React from "react";
import * as Types from "./types";

declare function OrganismGenerateurPersonnage(props: {
  as?: React.ElementType;
  competenceSlot?: Types.Devlink.Slot;
  backButtonLink?: Types.Basic.Link;
  classDescription?: React.ReactNode;
  className?: React.ReactNode;
  buttonRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonFormRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
