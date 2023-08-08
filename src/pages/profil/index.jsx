import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import * as _Builtin from "@/devlink/_Builtin";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import { OrganismNav } from "@/devlink/OrganismNav";
import { OrganismProfil } from "@/devlink/OrganismProfil";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PageProfil.module.css";

function PageProfil({ as: _Component = _Builtin.Block }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  // Redirect to registration page if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/register");
    }
  }, [user, router]);

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
        />
        <OrganismProfil /> {/* Display user profile */}
      </_Builtin.Block>
    </_Component>
  );
}

export default PageProfil;
