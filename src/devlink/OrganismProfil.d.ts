import * as React from "react";
import * as Types from "./types";

declare function OrganismProfil(props: {
  as?: React.ElementType;
  supprimerCompteRuntimeProps?: Types.Devlink.RuntimeProps;
  username?: React.ReactNode;
  userEmail?: React.ReactNode;
}): React.JSX.Element;
