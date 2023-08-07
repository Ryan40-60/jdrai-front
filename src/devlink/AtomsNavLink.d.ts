import * as React from "react";
import * as Types from "./types";

declare function AtomsNavLink(props: {
  as?: React.ElementType;
  navLinkIcon?: Types.Asset.Image;
  navLinkText?: React.ReactNode;
  navLinkRuntimeProps?: Types.Devlink.RuntimeProps;
  navLinkLink?: Types.Basic.Link;
}): React.JSX.Element;
