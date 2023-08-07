import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AtomsButtonProfil.module.css";

export function AtomsButtonProfil({
  as: _Component = _Builtin.Link,
  buttinIconImgPhoto = "https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce3a7ad5dcc1f6fd0e7fd0_profil.png",
  buttonRuntimeProps = {},

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "is-profil")}
      button={false}
      options={buttonLink}
      {...buttonRuntimeProps}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "buttin-icon-img")}
        loading="lazy"
        width="auto"
        height="auto"
        src={buttinIconImgPhoto}
      />
    </_Component>
  );
}
