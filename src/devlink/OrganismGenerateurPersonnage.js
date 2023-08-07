import React from "react";
import * as _Builtin from "./_Builtin";
import { MoleculeCompetenceCard } from "./MoleculeCompetenceCard";
import { AtomsButtonSecondary } from "./AtomsButtonSecondary";
import * as _utils from "./utils";
import _styles from "./OrganismGenerateurPersonnage.module.css";

export function OrganismGenerateurPersonnage({
  as: _Component = _Builtin.FormWrapper,
  competenceSlot,

  backButtonLink = {
    href: "#",
  },

  classDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  className = (
    <>
      {"Magicien"}
      <br />
    </>
  ),
  generateRuntimeProps = {},
  onSubmitRuntimeProps = {},
  pointLeft = "",
  personnageImgImage = "https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64cce7a2b4c8dd158beee42c_personnage.png",
}) {
  return (
    <_Component className={_utils.cx(_styles, "screen-content")}>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "personnage-form")}
        name="email-form"
        data-name="Email Form"
        method="get"
        id="email-form"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "generateur-description",
            "background-color-paper",
            "padding-medium"
          )}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "generateur-titre_wrapper",
                "margin-bottom",
                "margin-xsmall"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "generateur-titre")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "back-button")}
                  button={false}
                  options={backButtonLink}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "back-button-picto")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64ce1413f05e28519a43b8ca_arrow-back.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-size-tiny")}
                    tag="div"
                  >
                    {"Mes personnages"}
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Heading tag="h2">{className}</_Builtin.Heading>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "text-size-regular")}
            >
              {classDescription}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "competence-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "competence-titre")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-size-regular",
                  "text-weight-bold"
                )}
                tag="div"
              >
                {"Points de compétences"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "points-icon")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-size-small")}
                  tag="div"
                >
                  {pointLeft}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-size-small")}
                  tag="div"
                >
                  {"points restants"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "competence-data",
                "margin-bottom",
                "margin-small"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "competence-line")}
                tag="div"
              >
                {competenceSlot ?? (
                  <>
                    <MoleculeCompetenceCard />
                    <MoleculeCompetenceCard />
                    <MoleculeCompetenceCard />
                    <MoleculeCompetenceCard />
                  </>
                )}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "generateur-personnage")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "personnage-img")}
            loading="lazy"
            width="auto"
            height="auto"
            src={personnageImgImage}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "background-color-cadre")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "personnage-content")}
              tag="div"
            >
              <AtomsButtonSecondary
                buttonRuntimeProps={generateRuntimeProps}
                buttonText="Générer avec l'IA"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "personnage-button_wrapper")}
                tag="div"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "form_input")}
                  autoFocus={false}
                  maxLength={256}
                  name="Pseudo"
                  data-name="Pseudo"
                  placeholder="Votre pseudo..."
                  type="text"
                  disabled={false}
                  required={true}
                  id="Pseudo"
                />
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "button")}
                  type="submit"
                  value="Valider"
                  data-wait="Please wait..."
                  {...onSubmitRuntimeProps}
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
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
    </_Component>
  );
}
