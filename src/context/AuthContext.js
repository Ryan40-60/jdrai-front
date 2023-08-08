import React, { createContext, useState, useEffect } from "react";
import {
  fromLocalStorage,
  addToLocalStorage,
} from "@/services/localStorage.service";

// Create the AuthContext
const AuthContext = createContext();

export default AuthContext;

// AuthProvider component definition
export const AuthProvider = ({ children }) => {
  // Retrieve tokens and user data from local storage
  const access = fromLocalStorage("access");
  const refresh = fromLocalStorage("refresh");

  // Set up state for tokens and user
  const [accessToken, setAccessToken] = useState(access ? access.token : null);
  const [refreshToken, setRefreshToken] = useState(
    refresh ? refresh.token : null
  );
  const [user, setUser] = useState(fromLocalStorage("user"));

  // Context data object
  let contextData = {
    user: user,
    setUser: setUser,
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    refreshToken: refreshToken,
    setRefreshToken: setRefreshToken,
  };

  // useEffect(() => {
  //   if (accessToken) {
  //     setUser(jwt_decode(accessToken));
  //   }
  // }, [accessToken]);

  // const loginUser = async (e) => {
  //   e.preventDefault();
  //   const body = {
  //     usernameOrEmail: e.target.usernameOrEmail.value,
  //     password: e.target.password.value,
  //   };
  //   const [userData, userError] = await login(body);

  //   if (userError) {
  //     console.log(userError);
  //   } else {
  //     setUser(userData.user);
  //     setAccessToken(userData.access);
  //     setRefreshToken(userData.refresh);
  //     addToLocalStorage("user", userData.user);
  //     addToLocalStorage("access", userData.access);
  //     addToLocalStorage("refresh", userData.refresh);
  //     router.push("/");
  //   }
  // };

  //   let logoutUser = () => {
  //     setAuthTokens(null);
  //     setUser(null);
  //     localStorage.removeItem("authTokens");
  //     history.push("/login");
  //   };

  // Render AuthProvider with context data
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
