import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { MoleculeCompetenceCard } from "./MoleculeCompetenceCard";
import * as _utils from "./utils";
import _styles from "./OrganismDetailPerso.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"76115d7d-3cab-8649-ea6b-5e1d0aea82a2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"76115d7d-3cab-8649-ea6b-5e1d0aea82a2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1691238022828},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"76115d7d-3cab-8649-ea6b-5e1d0aea82a2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"76115d7d-3cab-8649-ea6b-5e1d0aea82a2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1691238022850}},"actionLists":{"a":{"id":"a","title":"card-personnage","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".personnage-photo","selectorGuids":["d62fb76f-3c99-4b42-a65a-42a1f4d964e9"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".background-color-panneau.is-little.is-rotate_panneau","selectorGuids":["fcfa7c2a-8edc-5fab-3d61-687c94f71a5b","29efdea0-c206-2042-fecc-b28605194d4a","fef08d61-4f84-b413-b880-d1e3b8494afb"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".background-color-panneau.is-little.is-rotate_panneau","selectorGuids":["fcfa7c2a-8edc-5fab-3d61-687c94f71a5b","29efdea0-c206-2042-fecc-b28605194d4a","fef08d61-4f84-b413-b880-d1e3b8494afb"]},"zValue":-2,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".panneau-text.is-rotate","selectorGuids":["c72ae647-9ae6-85dc-43c3-ad63b896669d","43e21de7-8b1c-35b9-d4d0-22c14416c28a"]},"zValue":2,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeInOut","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".personnage-photo","selectorGuids":["d62fb76f-3c99-4b42-a65a-42a1f4d964e9"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".panneau-text.is-rotate","selectorGuids":["c72ae647-9ae6-85dc-43c3-ad63b896669d","43e21de7-8b1c-35b9-d4d0-22c14416c28a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".background-color-panneau.is-little.is-rotate_panneau","selectorGuids":["fcfa7c2a-8edc-5fab-3d61-687c94f71a5b","29efdea0-c206-2042-fecc-b28605194d4a","fef08d61-4f84-b413-b880-d1e3b8494afb"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".background-color-panneau.is-little.is-rotate_panneau","selectorGuids":["fcfa7c2a-8edc-5fab-3d61-687c94f71a5b","29efdea0-c206-2042-fecc-b28605194d4a","fef08d61-4f84-b413-b880-d1e3b8494afb"]},"yValue":2,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1691238026152},"a-2":{"id":"a-2","title":"card-personnage-out","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".personnage-photo","selectorGuids":["d62fb76f-3c99-4b42-a65a-42a1f4d964e9"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".background-color-panneau.is-little.is-rotate_panneau","selectorGuids":["fcfa7c2a-8edc-5fab-3d61-687c94f71a5b","29efdea0-c206-2042-fecc-b28605194d4a","fef08d61-4f84-b413-b880-d1e3b8494afb"]},"zValue":-2,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".background-color-panneau.is-little.is-rotate_panneau","selectorGuids":["fcfa7c2a-8edc-5fab-3d61-687c94f71a5b","29efdea0-c206-2042-fecc-b28605194d4a","fef08d61-4f84-b413-b880-d1e3b8494afb"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".panneau-text.is-rotate","selectorGuids":["c72ae647-9ae6-85dc-43c3-ad63b896669d","43e21de7-8b1c-35b9-d4d0-22c14416c28a"]},"zValue":2,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1691238026152}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function OrganismDetailPerso({
  as: _Component = _Builtin.Block,
  competenceSlot,

  backButtonLink = {
    href: "#",
  },

  className = (
    <>
      {"Magicien"}
      <br />
    </>
  ),
  classDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  pointLeft = "",
  pseudo = "Nom du pseudo",
  personnageImgImage = "https://uploads-ssl.webflow.com/64cbe23719cf4bc2b30c2932/64cce7a2b4c8dd158beee42c_personnage.png",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "screen-content")} tag="div">
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
            className={_utils.cx(
              _styles,
              "background-color-panneau",
              "margin-top",
              "margin-auto"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "heading-style-h4",
                "text-align-center"
              )}
              tag="div"
            >
              {pseudo}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
