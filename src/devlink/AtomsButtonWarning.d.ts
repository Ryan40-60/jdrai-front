import * as React from "react";
import * as Types from "./types";

declare function AtomsButtonWarning(props: {
  as?: React.ElementType;
  buttonText?: React.ReactNode;
  buttonRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonLink?: Types.Basic.Link;
}): React.JSX.Element;
