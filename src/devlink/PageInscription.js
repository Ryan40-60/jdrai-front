import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import * as _utils from "./utils";
import _styles from "./PageInscription.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5bca412f-4cc1-21ca-9c24-d3282a03d32e"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1691440908157},"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"aae92a0e-ce89-9347-601c-bc9598c4e015"},"targets":[],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1691440921930}},"actionLists":{"a-3":{"id":"a-3","title":"introduction-animation","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":0,"unit":""}},{"id":"a-3-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":"none"}},{"id":"a-3-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d336"},"value":"none"}},{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d336"},"value":0,"unit":""}},{"id":"a-3-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d334"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":"flex"}},{"id":"a-3-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":800,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":1,"unit":""}},{"id":"a-3-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":1000,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d334"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-3-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"easeInOut","duration":1000,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":0,"unit":""}},{"id":"a-3-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":2000,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":"none"}}]},{"actionItems":[{"id":"a-3-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d336"},"value":"flex"}},{"id":"a-3-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"easeInOut","duration":1000,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d336"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1691314807353},"a-4":{"id":"a-4","title":"introduction-background","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"aae92a0e-ce89-9347-601c-bc9598c4e015"},"xValue":120,"xUnit":"svw","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":20000,"target":{"useEventTarget":true,"id":"aae92a0e-ce89-9347-601c-bc9598c4e015"},"xValue":0,"xUnit":"svw","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1691315189516}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PageInscription({
  as: _Component = _Builtin.Block,
  onSubmitFormRuntimeProps = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <_Builtin.Block
        className={_utils.cx(_styles, "section-sign")}
        data-w-id="5bca412f-4cc1-21ca-9c24-d3282a03d32e"
        tag="main"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "background-animation")}
          data-w-id="aae92a0e-ce89-9347-601c-bc9598c4e015"
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "container-small")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "introduction-text")}
            data-w-id="5bca412f-4cc1-21ca-9c24-d3282a03d332"
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "logo-intro")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce097c9c11711e17594ce0_logo.svg"
            />
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-color-white",
                "text-align-center",
                "opacity-80"
              )}
              data-w-id="5bca412f-4cc1-21ca-9c24-d3282a03d334"
              tag="h3"
            >
              {"Votre maitre du jeu pour des aventures unique."}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "content-sign_in",
              "background-color-paper",
              "padding-large"
            )}
            data-w-id="5bca412f-4cc1-21ca-9c24-d3282a03d336"
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
              {...onSubmitFormRuntimeProps}
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
                    htmlFor="username"
                  >
                    {"Pseudo"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "form_input")}
                    autoFocus={false}
                    maxLength={256}
                    name="username"
                    data-name="username"
                    placeholder="Votre pseudo..."
                    type="text"
                    disabled={false}
                    required={true}
                    id="username"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "input-wrapper")}
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "text-size-regular")}
                    htmlFor="email-5"
                  >
                    {"Email"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "form_input")}
                    autoFocus={false}
                    maxLength={256}
                    name="email"
                    data-name="email"
                    placeholder="Votre email..."
                    type="email"
                    disabled={false}
                    required={true}
                    id="email-5"
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
                <_Builtin.Block
                  className={_utils.cx(_styles, "input-wrapper")}
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "text-size-regular")}
                    htmlFor="confirmPassword"
                  >
                    {"Confirmation mot de passe"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "form_input")}
                    autoFocus={false}
                    maxLength={256}
                    name="confirmPassword"
                    data-name="confirmPassword"
                    placeholder="Mot de passe..."
                    type="password"
                    disabled={false}
                    required={true}
                    id="confirmPassword"
                  />
                </_Builtin.Block>
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "button")}
                  type="submit"
                  value="S'inscrire"
                  data-wait="Veuillez patienter..."
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
              {"Tu as déja un compte? "}
              <_Builtin.Link
                button={false}
                options={{
                  href: "#",
                }}
              >
                {"Connecte toi"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
