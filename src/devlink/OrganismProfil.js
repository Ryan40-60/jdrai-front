import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OrganismProfil.module.css";

export function OrganismProfil({
  as: _Component = _Builtin.Block,
  supprimerCompteRuntimeProps = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "screen-content")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "personnages-list",
          "background-color-paper",
          "padding-medium"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "personnages-titre_wrapper",
            "margin-bottom",
            "margin-xsmall"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "generateur-titre")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-size-tiny")}
              tag="div"
            >
              {"paramètre"}
            </_Builtin.Block>
            <_Builtin.Heading tag="h2">
              {"Mon profil"}
              <br />
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "button", "is-warning")}
            button={true}
            options={{
              href: "#",
            }}
            {...supprimerCompteRuntimeProps}
          >
            {"Supprimer mon compte"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          <_Builtin.FormWrapper>
            <_Builtin.FormForm
              className={_utils.cx(_styles, "form-3")}
              name="email-form"
              data-name="Email Form"
              method="get"
              id="email-form"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "input-wrapper")}
                tag="div"
              >
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "text-size-regular")}
                  htmlFor="identifiant-3"
                >
                  {"Pseudo"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "form_input")}
                  autoFocus={false}
                  maxLength={256}
                  name="identifiant-2"
                  data-name="Identifiant 2"
                  placeholder="Votre pseudo ou email..."
                  type="text"
                  disabled={false}
                  required={true}
                  id="identifiant-2"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "input-wrapper")}
                tag="div"
              >
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "text-size-regular")}
                  htmlFor="identifiant-3"
                >
                  {"Email"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "form_input")}
                  autoFocus={false}
                  maxLength={256}
                  name="identifiant-2"
                  data-name="Identifiant 2"
                  placeholder="Votre pseudo ou email..."
                  type="text"
                  disabled={false}
                  required={true}
                  id="identifiant-2"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "input-wrapper")}
                tag="div"
              >
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "text-size-regular")}
                  htmlFor="identifiant-3"
                >
                  {"Password"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "form_input")}
                  autoFocus={false}
                  maxLength={256}
                  name="identifiant-2"
                  data-name="Identifiant 2"
                  placeholder="Votre pseudo ou email..."
                  type="text"
                  disabled={false}
                  required={true}
                  id="identifiant-2"
                />
              </_Builtin.Block>
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
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
