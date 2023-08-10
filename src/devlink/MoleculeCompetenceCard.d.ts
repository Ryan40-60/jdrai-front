import * as React from "react";
import * as Types from "./types";

declare function MoleculeCompetenceCard(props: {
  as?: React.ElementType;
  statTitre?: React.ReactNode;
  statDescription?: React.ReactNode;
  skillValue?: React.ReactNode;
  competenceNumberId?: Types.Basic.IdTextInput;
  competenceRuntimeProps?: Types.Devlink.RuntimeProps;
  isDisabled?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
