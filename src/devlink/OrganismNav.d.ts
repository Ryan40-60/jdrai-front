import * as React from "react";
import * as Types from "./types";

declare function OrganismNav(props: {
  as?: React.ElementType;
  navLogo?: Types.Asset.Image;
  navActionWrapperSlot?: Types.Devlink.Slot;
  navLinkWrapperSlot?: Types.Devlink.Slot;
  handleClassSelect?: Types.Devlink.RuntimeProps;
  buttonWarningRuntimeProps?: Types.Devlink.RuntimeProps;
  navClassWrapperVisibility?: Types.Visibility.VisibilityConditions;
  navButtonsWrapperVisibility?: Types.Visibility.VisibilityConditions;
  navLinkWrapperVisibility?: Types.Visibility.VisibilityConditions;
  buttonRuntimeProps?: Types.Devlink.RuntimeProps;
  navEditButtonsWrapperVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
