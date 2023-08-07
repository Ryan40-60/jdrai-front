import React, { useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/characters/me");
    } else {
      router.push("/login");
    }
  }, [user, router]);

  return null;
};

export default PrivateRoute;
