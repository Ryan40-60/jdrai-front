import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import AuthContext from "@/context/AuthContext";

// Component definition
const PrivateRoute = () => {
  // Destructure user from AuthContext
  const { user } = useContext(AuthContext);
  // Initialize router
  const router = useRouter();

  // Effect to handle routing logic
  useEffect(() => {
    if (user) {
      // Redirect authenticated user to character page
      router.push("/characters/me");
    } else {
      // Redirect unauthenticated user to register page
      router.push("/register");
    }
  }, [user, router]);

  return null;
};

export default PrivateRoute;
