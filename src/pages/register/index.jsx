import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { register } from "@/services/auth.service";
import { addToLocalStorage } from "@/services/localStorage.service";
import { PageInscription } from "@/devlink";
import * as _Builtin from "@/devlink/_Builtin";
import * as _interactions from "@/devlink/interactions";
import { GlobalStyles } from "@/devlink/GlobalStyles";
import * as _utils from "@/devlink/utils";
import _styles from "@/devlink/PageInscription.module.css";

function RegisterPage() {
  const router = useRouter();
  const { user, setUser, setRefreshToken, setAccessToken } =
    useContext(AuthContext);

  // Redirect to characters page if user is already logged in
  useEffect(() => {
    if (user) {
      router.push("/characters/me");
    }
  }, [user, router]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.confirmPassword.trim() === ""
    ) {
      alert("Veuillez remplir tous les champs.");
    } else if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passes ne sont pas similaires.");
    } else {
      try {
        const [userData, error] = await register(formData);
        if (error) {
          console.log("Registration failed:", error.status);
        } else {
          // Handle successful registration here
          console.log("Registration successful:", userData);

          // Extract the required variables from the user data
          const { user, access, refresh } = userData;

          // Save the variables in localStorage
          addToLocalStorage("user", user);
          addToLocalStorage("access", access);
          addToLocalStorage("refresh", refresh);
          setUser(user);
          setAccessToken(access);
          setRefreshToken(refresh);

          router.push("/characters/me");
        }
      } catch (error) {
        console.log("Error occurred while registering:", error);
      }
    }
  };

  return (
    <PageInscription
      onSubmitFormRuntimeProps={{
        onChange: handleChange,
        onSubmit: handleSubmit,
      }}
      connexionLink={{ href: "/login" }}
    />
  );
}

export default RegisterPage;
