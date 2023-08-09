import * as React from "react";
import * as Types from "./types";

declare function OrganismNav(props: {
  as?: React.ElementType;
  navLogo?: Types.Asset.Image;
  navActionWrapperSlot?: Types.Devlink.Slot;
  navLinkWrapperSlot?: Types.Devlink.Slot;
  deleteRuntimeProps?: Types.Devlink.RuntimeProps;
  navClassWrapperVisibility?: Types.Visibility.VisibilityConditions;
  navButtonsWrapperVisibility?: Types.Visibility.VisibilityConditions;
  navLinkWrapperVisibility?: Types.Visibility.VisibilityConditions;
  navEditButtonsWrapperVisibility?: Types.Visibility.VisibilityConditions;
  mondeLink?: Types.Basic.Link;
  mesPersonnagesLink?: Types.Basic.Link;
  profilLink?: Types.Basic.Link;
  chooseClassMageRuntimeProps?: Types.Devlink.RuntimeProps;
  chooseClassGuerrierRuntimeProps?: Types.Devlink.RuntimeProps;
  chooseClassArcherRuntimeProps?: Types.Devlink.RuntimeProps;
  chooseClassVoleurRuntimeProps?: Types.Devlink.RuntimeProps;
  disconnectRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
