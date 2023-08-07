import * as React from "react";
import * as Types from "./types";

declare function PagePersoList(props: {
  as?: React.ElementType;
  disconnect?: Types.Devlink.RuntimeProps;
  navLinkWrapperVisibility?: Types.Visibility.VisibilityConditions;
  navActionWrapperVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
