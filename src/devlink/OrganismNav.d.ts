import * as React from "react";
import * as Types from "./types";

declare function OrganismNav(props: {
  as?: React.ElementType;
  navLogo?: Types.Asset.Image;
  navActionWrapperSlot?: Types.Devlink.Slot;
  navLinkWrapperSlot?: Types.Devlink.Slot;
  handleClassSelect?: Types.Devlink.RuntimeProps;
  buttonWarningRuntimeProps?: Types.Devlink.RuntimeProps;
  navActionWrapperVisibility?: Types.Visibility.VisibilityConditions;
  navButtonsWrapperVisibility?: Types.Visibility.VisibilityConditions;
  navLinkWrapperVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
