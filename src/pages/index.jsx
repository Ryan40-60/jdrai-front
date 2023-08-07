"use client";

import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import PrivateRoute from "@/components/PrivateRoute";

const HomePage = () => {
  return (
    <AuthProvider>
      <PrivateRoute />
    </AuthProvider>
  );
};

export default HomePage;
