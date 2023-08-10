import React from "react";
import * as _Builtin from "./_Builtin";
import { AtomsNavLink } from "./AtomsNavLink";
import { AtomsButtonIconWarning } from "./AtomsButtonIconWarning";
import { AtomsButtonIcon } from "./AtomsButtonIcon";
import { AtomsButtonProfil } from "./AtomsButtonProfil";
import * as _utils from "./utils";
import _styles from "./OrganismNav.module.css";

export function OrganismNav({
  as: _Component = _Builtin.Block,
  navLogo = "https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce097c9c11711e17594ce0_logo.svg",
  navActionWrapperSlot,
  navLinkWrapperSlot,
  deleteRuntimeProps = {},
  navClassWrapperVisibility = true,
  navButtonsWrapperVisibility = true,
  navLinkWrapperVisibility = false,
  navEditButtonsWrapperVisibility = true,

  mondeLink = {
    href: "#",
  },

  mesPersonnagesLink = {
    href: "#",
  },

  profilLink = {
    href: "#",
  },

  chooseClassMageRuntimeProps = {},
  chooseClassGuerrierRuntimeProps = {},
  chooseClassArcherRuntimeProps = {},
  chooseClassVoleurRuntimeProps = {},
  disconnectRuntimeProps = {},
  buttonRuntimeProps = {},
  editLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "left_menu", "background-color-cuir")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "left_menu-content")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "logo-jdrai", "margin-bottom")}
          loading="lazy"
          width="auto"
          height="auto"
          src={navLogo}
        />
        {navClassWrapperVisibility ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-action_wrapper")}
            tag="div"
          >
            {navActionWrapperSlot ?? <></>}
          </_Builtin.Block>
        ) : null}
        {navLinkWrapperVisibility ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-link_wrapper")}
            tag="div"
          >
            {navLinkWrapperSlot ?? (
              <>
                <AtomsNavLink
                  navLinkLink={mesPersonnagesLink}
                  navLinkText="Perso"
                />
              </>
            )}
          </_Builtin.Block>
        ) : null}
        {navEditButtonsWrapperVisibility ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-edit_buttons_wrapper")}
            tag="div"
          >
            <AtomsButtonIcon
              buttonRuntimeProps={buttonRuntimeProps}
              editLink={editLink}
            />
            <AtomsButtonIconWarning
              buttonWarningRuntimeProps={deleteRuntimeProps}
              buttonWarningIcon="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce1785090550f27ad94614_Delete.svg"
            />
          </_Builtin.Block>
        ) : null}
        {navButtonsWrapperVisibility ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-buttons_wrapper")}
            tag="div"
          >
            <AtomsButtonProfil buttonLink={profilLink} />
            <AtomsButtonIconWarning
              buttonWarningRuntimeProps={disconnectRuntimeProps}
              buttonWarningIcon="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce3a7a31615eaba34b78ef_Exit%20to%20app.svg"
            />
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
