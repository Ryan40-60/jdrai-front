import * as React from "react";
import * as Types from "./types";

declare function AtomsButtonMain(props: {
  as?: React.ElementType;
  buttonMainText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  buttonMainRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
