import React from "react";
import * as _Builtin from "./_Builtin";
import { AtomsNavLink } from "./AtomsNavLink";
import { AtomsButtonProfil } from "./AtomsButtonProfil";
import { AtomsButtonIconWarning } from "./AtomsButtonIconWarning";
import * as _utils from "./utils";
import _styles from "./OrganismNav.module.css";

export function OrganismNav({
  as: _Component = _Builtin.Block,
  navLogo = "https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce097c9c11711e17594ce0_logo.svg",
  navActionWrapperSlot,
  navLinkWrapperSlot,
  handleClassSelect = {},
  buttonWarningRuntimeProps = {},
  navActionWrapperVisibility = true,
  navButtonsWrapperVisibility = true,
  navLinkWrapperVisibility = false,
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
        {navActionWrapperVisibility ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-action_wrapper")}
            tag="div"
          >
            {navActionWrapperSlot ?? (
              <>
                <AtomsNavLink
                  navLinkRuntimeProps={handleClassSelect}
                  navLinkText="Mage"
                  navLinkLink={{
                    href: "#",
                  }}
                  navLinkIcon="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce097d9e1879e4a8216e19_magic.svg"
                />
                <AtomsNavLink
                  navLinkRuntimeProps={handleClassSelect}
                  navLinkText="Voleur"
                  navLinkLink={{
                    href: "#",
                  }}
                  navLinkIcon="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce097d9e1879e4a8216e0a_gem.svg"
                />
                <AtomsNavLink
                  navLinkRuntimeProps={handleClassSelect}
                  navLinkText="Archer"
                  navLinkLink={{
                    href: "#",
                  }}
                  navLinkIcon="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce097c68cb8c8447462e72_bow.svg"
                />
                <AtomsNavLink
                  navLinkRuntimeProps={handleClassSelect}
                  navLinkText="Guerrier"
                  navLinkLink={{
                    href: "#",
                  }}
                  navLinkIcon="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce097cd5dcc1f6fde91d0f_sword.svg"
                />
              </>
            )}
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
                  navLinkText="Perso"
                  navLinkLink={{
                    href: "#",
                  }}
                />
                <AtomsNavLink
                  navLinkText="Monde"
                  navLinkLink={{
                    href: "#",
                  }}
                />
              </>
            )}
          </_Builtin.Block>
        ) : null}
        {navButtonsWrapperVisibility ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-buttons_wrapper")}
            tag="div"
          >
            <AtomsButtonProfil />
            <AtomsButtonIconWarning
              buttonWarningRuntimeProps={buttonWarningRuntimeProps}
              buttonWarningIcon="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce3a7a31615eaba34b78ef_Exit%20to%20app.svg"
            />
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
