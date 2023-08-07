"use client";

import { LayoutInscription } from "@/devlink";
import { register } from "@/services/auth.service";
import React, { useState } from "react";

function InscriptionPage() {
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

          // Redirect the user to a login page or any other desired page
          // For example, redirect to the login page after successful registration
          // You can use the Next.js Router for client-side navigation
          // For example:
          // import { useRouter } from "next/router";
          // const router = useRouter();
          // router.push("/login");
        }
      } catch (error) {
        console.log("Error occurred while registering:", error);
      }
    }
  };

  return (
    <LayoutInscription />
  );
}

export default InscriptionPage;
