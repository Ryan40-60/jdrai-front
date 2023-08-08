import { login } from "@/services/auth.service";
import { addToLocalStorage } from "@/services/localStorage.service";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { PageConnexion } from "@/devlink";

function LoginPage() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.usernameOrEmail.trim() === "" ||
      formData.password.trim() === ""
    ) {
      alert("Please fill in all fields.");
    } else {
      try {
        const [userData, userError] = await login(formData);
        if (userError) {
          console.log("Login failed:", userError);
        } else {
          // Handle successful login here
          console.log("Logged in successfully:", userData);

          // Extract the required variables from the user data
          const { user, access, refresh } = userData;

          // Save the variables in localStorage
          addToLocalStorage("user", user);
          addToLocalStorage("access", access);
          addToLocalStorage("refresh", refresh);

          router.push("/characters/me");
        }
      } catch (error) {
        console.log("Error occurred while logging in:", error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/characters/me");
    }
  }, [user, router]);

  return (
    <PageConnexion
      onSubmitRuntimeProps={{ onChange: handleChange, onSubmit: handleSubmit }}
    />
  );
}

export default LoginPage;
