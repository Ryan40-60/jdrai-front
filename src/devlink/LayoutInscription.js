import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import { MoleculeFormInput } from "./MoleculeFormInput";
import * as _utils from "./utils";
import _styles from "./LayoutInscription.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1691314273184},"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1691335694378}},"actionLists":{"a-3":{"id":"a-3","title":"introduction-animation","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":0,"unit":""}},{"id":"a-3-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":"none"}},{"id":"a-3-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d336"},"value":"none"}},{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d336"},"value":0,"unit":""}},{"id":"a-3-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d334"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":"flex"}},{"id":"a-3-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":800,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":1,"unit":""}},{"id":"a-3-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":1000,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d334"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-3-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"easeInOut","duration":1000,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":0,"unit":""}},{"id":"a-3-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":2000,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d332"},"value":"none"}}]},{"actionItems":[{"id":"a-3-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d336"},"value":"flex"}},{"id":"a-3-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"easeInOut","duration":1000,"target":{"id":"5bca412f-4cc1-21ca-9c24-d3282a03d336"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1691314807353},"a-4":{"id":"a-4","title":"introduction-background","actionItemGroups":[{"actionItems":[{"id":"a-4-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".introduction-background.reset-bg","selectorGuids":["dc5f008c-03c6-a5eb-70dd-6b586c855c98","2f28ac20-af81-15e2-9fea-d22b443fe393"]},"value":0,"unit":""}},{"id":"a-4-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".introduction-background.movement-bg","selectorGuids":["dc5f008c-03c6-a5eb-70dd-6b586c855c98","3657b61e-0732-0637-938e-cadf03a55717"]},"value":1,"unit":""}},{"id":"a-4-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".introduction-background.movement-bg","selectorGuids":["dc5f008c-03c6-a5eb-70dd-6b586c855c98","3657b61e-0732-0637-938e-cadf03a55717"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-4-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"selector":".introduction-background.reset-bg","selectorGuids":["dc5f008c-03c6-a5eb-70dd-6b586c855c98","2f28ac20-af81-15e2-9fea-d22b443fe393"]},"value":0,"unit":""}},{"id":"a-4-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"selector":".introduction-background.movement-bg","selectorGuids":["dc5f008c-03c6-a5eb-70dd-6b586c855c98","3657b61e-0732-0637-938e-cadf03a55717"]},"value":1,"unit":""}},{"id":"a-4-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":20000,"target":{"selector":".introduction-background.movement-bg","selectorGuids":["dc5f008c-03c6-a5eb-70dd-6b586c855c98","3657b61e-0732-0637-938e-cadf03a55717"]},"xValue":-25,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-4-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":19000,"easing":"easeInOut","duration":1000,"target":{"selector":".introduction-background.movement-bg","selectorGuids":["dc5f008c-03c6-a5eb-70dd-6b586c855c98","3657b61e-0732-0637-938e-cadf03a55717"]},"value":0,"unit":""}},{"id":"a-4-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":19000,"easing":"easeInOut","duration":0,"target":{"selector":".introduction-background.reset-bg","selectorGuids":["dc5f008c-03c6-a5eb-70dd-6b586c855c98","2f28ac20-af81-15e2-9fea-d22b443fe393"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-4-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".introduction-background.movement-bg","selectorGuids":["dc5f008c-03c6-a5eb-70dd-6b586c855c98","3657b61e-0732-0637-938e-cadf03a55717"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1691315189516}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LayoutInscription({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <_Builtin.Block className={_utils.cx(_styles, "section-sign")} tag="main">
        <_Builtin.Image
          className={_utils.cx(_styles, "introduction-background", "reset-bg")}
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64cf628ed9d267abe7018eec_background-intro.png"
        />
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "introduction-background",
            "movement-bg"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64cf628ed9d267abe7018eec_background-intro.png"
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
            <_Builtin.FormWrapper className={_utils.cx(_styles, "form-block")}>
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
                <MoleculeFormInput />
                <_Builtin.Block
                  className={_utils.cx(_styles, "input-wrapper")}
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "text-size-regular")}
                    htmlFor="Email-4"
                  >
                    {"Email"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "form_input")}
                    autoFocus={false}
                    maxLength={256}
                    name="Email-4"
                    data-name="Email 4"
                    placeholder="Votre email..."
                    type="email"
                    disabled={false}
                    required={true}
                    id="Email-4"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "input-wrapper")}
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "text-size-regular")}
                    htmlFor="mdp-2"
                  >
                    {"Mot de passe"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "form_input")}
                    autoFocus={false}
                    maxLength={256}
                    name="mdp-2"
                    data-name="Mdp 2"
                    placeholder="Mot de passe..."
                    type="password"
                    disabled={false}
                    required={true}
                    id="mdp-2"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "input-wrapper")}
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "text-size-regular")}
                    htmlFor="mdp-bis-2"
                  >
                    {"Confirmation mot de passe"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "form_input")}
                    autoFocus={false}
                    maxLength={256}
                    name="mdp-bis-2"
                    data-name="Mdp Bis 2"
                    placeholder="Mot de passe..."
                    type="password"
                    disabled={false}
                    required={true}
                    id="mdp-bis-2"
                  />
                </_Builtin.Block>
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "button")}
                  type="submit"
                  value="S'inscrire"
                  data-wait="Please wait..."
                />
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-size-regular")}
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
