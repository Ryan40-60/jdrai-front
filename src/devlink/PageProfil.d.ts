import * as React from "react";
import * as Types from "./types";

declare function PageProfil(props: {
  as?: React.ElementType;
  supprimerCompteRuntimeProps?: Types.Devlink.RuntimeProps;
  disconnectRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
