import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import * as _utils from "./utils";
import _styles from "./PageConnexion.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"68557800-79b8-112a-3417-a3adcb66fd5b"},"targets":[],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1691443044327}},"actionLists":{"a-4":{"id":"a-4","title":"introduction-background","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"aae92a0e-ce89-9347-601c-bc9598c4e015"},"xValue":120,"xUnit":"svw","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":20000,"target":{"useEventTarget":true,"id":"aae92a0e-ce89-9347-601c-bc9598c4e015"},"xValue":0,"xUnit":"svw","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1691315189516}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PageConnexion({
  as: _Component = _Builtin.Block,
  onSubmitRuntimeProps = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <_Builtin.Block className={_utils.cx(_styles, "section-sign")} tag="main">
        <_Builtin.Block
          className={_utils.cx(_styles, "background-animation")}
          data-w-id="68557800-79b8-112a-3417-a3adcb66fd5b"
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "container-small")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "content-sign_in",
              "background-color-paper",
              "padding-large"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "inscription-title")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64cf67625ab57e07073bc3f2_JDRAI.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-size-small")}
              tag="div"
            >
              {"Héroïque fantaisie"}
            </_Builtin.Block>
            <_Builtin.FormWrapper
              className={_utils.cx(_styles, "form-block")}
              {...onSubmitRuntimeProps}
            >
              <_Builtin.FormForm
                className={_utils.cx(
                  _styles,
                  "form-wrapper",
                  "margin-vertical",
                  "margin-xsmall"
                )}
                name="wf-form-inscription"
                data-name="inscription"
                method="get"
                id="wf-form-inscription"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "input-wrapper")}
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "text-size-regular")}
                    htmlFor="usernameOrEmail"
                  >
                    {"Pseudo ou Email"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "form_input")}
                    autoFocus={false}
                    maxLength={256}
                    name="usernameOrEmail"
                    data-name="usernameOrEmail"
                    placeholder="Votre pseudo ou email..."
                    type="text"
                    disabled={false}
                    required={true}
                    id="usernameOrEmail"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "input-wrapper")}
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "text-size-regular")}
                    htmlFor="password"
                  >
                    {"Mot de passe"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "form_input")}
                    autoFocus={false}
                    maxLength={256}
                    name="password"
                    data-name="password"
                    placeholder="Mot de passe..."
                    type="password"
                    disabled={false}
                    required={true}
                    id="password"
                  />
                </_Builtin.Block>
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "button")}
                  type="submit"
                  value="Se connecter"
                  data-wait="Please wait..."
                />
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-size-regular", "hide")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  {"Mot de passe oublié?"}
                </_Builtin.Link>
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage>
                <_Builtin.Block tag="div">
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-size-regular")}
              tag="div"
            >
              {"Vous n’avez pas encore de compte? "}
              <_Builtin.Link
                button={false}
                options={{
                  href: "/register",
                }}
              >
                {"Inscrivez-vous!"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
