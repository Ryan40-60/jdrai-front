import * as React from "react";
import * as Types from "./types";

declare function ButtonSecondary(props: {
  as?: React.ElementType;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  buttonRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
