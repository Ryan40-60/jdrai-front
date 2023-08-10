import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TextField, Button } from "@mui/material";
import Image from "next/image";

// import { submitFeedback } from "@/services/feedbackService";
import { GlobalStyles } from "@/devlink/GlobalStyles";

// Define the content and description of the project
const projectDescription =
  "JDRAI est une plateforme de jeux de rôle en ligne qui souhaite exploiter la puissance de l'IA et des modèles de langage pour créer des histoires captivantes et immersives. Notre objectif est d'offrir une expérience narrative interactive unique, permettant aux utilisateurs de se lancer dans des aventures dans des mondes dynamiques et évolutifs.";
const currentSite =
  "Le site que vous visitez actuellement représente une version d'essai du projet JDRAI. Bien qu'il offre un aperçu de notre vision, tout le potentiel de JDRAI est encore à venir. Nous sommes enthousiastes à l'idée de continuer à développement et l'amélioration de notre plateforme afin de vous offrir une expérience de jeu de rôle inégalée.";
const AboutPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="about-cover"></div>
      <div className="about-background">
        <GlobalStyles />
        <div className="about-container">
          <div className="backbtn-container">
            <Link className="backprofil-btn" href="/profil">
              ← Mon profil
            </Link>
          </div>
          <div className="content-container">
            <div className="first-part-container">
              <h1 className="main-title">À propos de JDRAI</h1>
              <p>{projectDescription}</p>
            </div>
            <div className="feature-details">
              <div className="second-part-container">
                <h2>Site actuel: V1 - Création de personnage</h2>
                <p>{currentSite}</p>
              </div>
              <div className="img-container">
                <img
                  className="feature-img"
                  src="./assets/maquette.png"
                  alt=""
                />
              </div>
            </div>
            <div className="feedback-container">
              <h2>Donnez votre avis</h2>
              <form className="feedback-form">
                <TextField
                  label="Your Feedback"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="feedback-btn"
                  onClick={() => router.push("mailto:feedback@jdrai.com")}
                >
                  Soumettre mon avis
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
