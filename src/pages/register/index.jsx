import { PageInscription } from "@/devlink";
import { register } from "@/services/auth.service";
import { addToLocalStorage } from "@/services/localStorage.service";
import React, { useState } from "react";

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    console.log({ formData });
    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.confirmPassword.trim() === ""
    ) {
      alert("Please fill in all fields.");
    } else if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
    } else {
      try {
        const [userData, error] = await register(formData);
        if (error) {
          console.log("Registration failed:", error);
        } else {
          // Handle successful registration here
          console.log("Registration successful:", userData);

          // Save the variables in localStorage
          addToLocalStorage("user", user);
          addToLocalStorage("access", access);
          addToLocalStorage("refresh", refresh);

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
    />
  );
}

export default RegisterPage;
