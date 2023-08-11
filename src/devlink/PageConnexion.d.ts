import * as React from "react";
import * as Types from "./types";

declare function PageConnexion(props: {
  as?: React.ElementType;
  onSubmitRuntimeProps?: Types.Devlink.RuntimeProps;
  isError?: Types.Visibility.VisibilityConditions;
  isSuccess?: Types.Visibility.VisibilityConditions;
  errorChipLabel?: React.ReactNode;
  successChipLabel?: React.ReactNode;
  inscriptionLink?: Types.Basic.Link;
}): React.JSX.Element;
