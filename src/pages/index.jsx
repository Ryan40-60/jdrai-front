"use client";

import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import PrivateRoute from "@/components/PrivateRoute";
import CharactersPage from "./characters/me";

const HomePage = () => {
  return (
    <AuthProvider>
      <PrivateRoute />
    </AuthProvider>
  );
};

export default HomePage;
