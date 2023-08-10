import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import {
  deleteAuthenticatedUser,
  getAuthenticatedUser,
} from "@/services/user.service";
import { logout } from "@/services/auth.service";
import { removeFromLocalStorage } from "@/services/localStorage.service";
import * as _Builtin from "@/devlink/_Builtin";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { OrganismNav } from "@/devlink/OrganismNav";
import { OrganismProfil } from "@/devlink/OrganismProfil";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PageProfil.module.css";

function PageProfil({ as: _Component = _Builtin.Block }) {
  const router = useRouter();
  const { user, setUser, setAccessToken, setRefreshToken } =
    useContext(AuthContext);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  // Redirect to registration page if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const deleteAccount = () => {
    const shouldDelete1 = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ?"
    );
    if (shouldDelete1) {
      const shouldDelete2 = window.confirm(
        "Votre compte ne pourra pas être récupéré. Voulez-vous continuer ?"
      );
      if (shouldDelete2) {
        deleteAuthenticatedUser().then(([data, error]) => {
          console.log(data);

          // Clear tokens and user data from local storage
          removeFromLocalStorage("user");
          removeFromLocalStorage("access");
          removeFromLocalStorage("refresh");
          setUser(null);
          setAccessToken(null);
          setRefreshToken(null);
        });
      }
    }
  };

  // Function to handle user logout
  const logoutUser = () => {
    const shouldLogout = window.confirm(
      "Êtes-vous sûr de vouloir vous déconnecter ?"
    );
    if (shouldLogout) {
      logout().then(([data, error]) => {
        console.log(data);

        // Clear tokens and user data from local storage
        removeFromLocalStorage("user");
        removeFromLocalStorage("access");
        removeFromLocalStorage("refresh");
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
      });
    }
  };

  useEffect(() => {
    setUsername(user?.username);
    setEmail(user?.email);
  }, [user]);

  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles /> {/* Apply global styles */}
      <_Builtin.Block
        className={_utils.cx(_styles, "section-screen")}
        tag="main"
      >
        <OrganismNav
          navClassWrapperVisibility={false}
          navLinkWrapperVisibility={true}
          navEditButtonsWrapperVisibility={false}
          disconnectRuntimeProps={{ onClick: logoutUser }}
          mesPersonnagesLink={{ href: "/characters/me" }}
        />
        <OrganismProfil
          supprimerCompteRuntimeProps={{ onClick: deleteAccount }}
          userEmail={email}
          username={username}
        />
      </_Builtin.Block>
    </_Component>
  );
}

export default PageProfil;
