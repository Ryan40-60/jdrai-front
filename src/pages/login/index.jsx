import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { login } from "@/services/auth.service";
import { addToLocalStorage } from "@/services/localStorage.service";
import { PageConnexion } from "@/devlink";

function LoginPage() {
  const router = useRouter();
  const { user, setUser, setRefreshToken, setAccessToken } =
    useContext(AuthContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorLabel, setErrorLabel] = useState(null);

  // Redirect to characters page if user is already logged in
  useEffect(() => {
    if (user) {
      router.push("/characters/me");
    }
  }, [user, router]);

  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  // Update form data on input change
  const handleChange = (e) => {
    setIsError(false);
    setErrorLabel(null);
    setIsSuccess(false);
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
      formData.usernameOrEmail.trim() === "" ||
      formData.password.trim() === ""
    ) {
      setIsError(true);
      setErrorLabel("Veuillez remplir tous les champs.");
    } else {
      try {
        const [userData, userError] = await login(formData);
        if (userError) {
          setIsError(true);
          setErrorLabel(userError.data.message);
          console.log("Login failed:", userError);
        } else {
          // Handle successful login here
          console.log("Logged in successfully:", userData);

          setIsSuccess(true);
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
        console.log("Error occurred while logging in:", error);
      }
    }
  };

  return (
    <PageConnexion
      onSubmitRuntimeProps={{ onChange: handleChange, onSubmit: handleSubmit }}
      inscriptionLink={{ href: "/register" }}
      isError={isError}
      isSuccess={isSuccess}
      errorChipLabel={errorLabel}
      successChipLabel={"Connexion réussie"}
    />
  );
}

export default LoginPage;
