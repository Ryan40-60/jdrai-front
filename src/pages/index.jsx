import { login } from "@/services/auth.service";
import {
  addToLocalStorage,
  fromLocalStorage,
} from "@/services/localStorage.service";
import React, { useState } from "react";
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();
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

          // Redirect the user to a dashboard page or any other desired page
          // You can use the Next.js Router for client-side navigation
          // For example:
          router.push("/characters/me");
        }
      } catch (error) {
        console.log("Error occurred while logging in:", error);
      }
    }
  };

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameOrEmail">Username or Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
            aria-label="Username or Email"
            aria-describedby="usernameOrEmailError"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-label="Password"
          />
        </div>
        <button type="submit">Login</button>
        <p
          id="usernameOrEmailError"
          style={{ color: "red" }}
          aria-live="assertive"
          aria-atomic="true"
        >
          {/* Display any error messages here */}
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
