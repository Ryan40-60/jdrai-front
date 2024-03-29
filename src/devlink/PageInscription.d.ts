import * as React from "react";
import * as Types from "./types";

declare function PageInscription(props: {
  as?: React.ElementType;
  onSubmitFormRuntimeProps?: Types.Devlink.RuntimeProps;
  isError?: Types.Visibility.VisibilityConditions;
  isSuccess?: Types.Visibility.VisibilityConditions;
  errorChipLabel?: React.ReactNode;
  successChipLabel?: React.ReactNode;
  connexionLink?: Types.Basic.Link;
}): React.JSX.Element;
