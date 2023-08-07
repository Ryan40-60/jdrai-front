import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ComponentTest.module.css";

export function ComponentTest({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "component-test")}
      id={_utils.cx(
        _styles,
        "w-node-_01b3e2dc-3c71-1ea1-3cef-451f9c45574d-9c45574d"
      )}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "component-img")}
        loading="lazy"
        width="auto"
        height="auto"
        src="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64cbe23719cf4bc2b30c29a9_cloneable.png"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "component-text")}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "title-test")} tag="h4">
          {"Heading"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-test")}>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
