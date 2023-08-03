// Libraries
import { useState } from "react";
import moment from "moment";
import authService from "@/services/auth.service";

export function useAuthStore() {
  const [user, setUser] =
    (useState < User) |
    (null >
      (localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null));

  const [accessToken, setAccessToken] =
    (useState < Token) |
    (null >
      (localStorage.getItem("accessToken")
        ? JSON.parse(localStorage.getItem("accessToken"))
        : null));

  const [refreshToken, setRefreshToken] =
    (useState < Token) |
    (null >
      (localStorage.getItem("refreshToken")
        ? JSON.parse(localStorage.getItem("refreshToken"))
        : null));

  const [refreshPromise, setRefreshPromise] = useState(null);

  /**
   * Login function
   * @param {string} identifiant
   * @param {string} motDePasse
   */
  async function login(identifiant, motDePasse) {
    try {
      const response = await authService.login(identifiant, motDePasse);

      localStorage.setItem("user", JSON.stringify(response.utilisateur));
      localStorage.setItem("accessToken", JSON.stringify(response.access));
      localStorage.setItem("refreshToken", JSON.stringify(response.refresh));

      setUser(response.utilisateur);
      setAccessToken(response.access);
      setRefreshToken(response.refresh);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Logout function
   */
  async function logout() {
    if (!refreshToken) {
      throw new Error("Not logged in");
    }

    try {
      await authService.logout();
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      setUser(null);
      setAccessToken(null);
      setRefreshToken(null);
    }
  }

  /**
   * Refresh tokens function
   */
  async function refreshTokens() {
    if (!refreshToken) return;

    try {
      const response = await authService.refreshTokens(refreshToken.token);

      localStorage.setItem("accessToken", JSON.stringify(response.access));
      localStorage.setItem("refreshToken", JSON.stringify(response.refresh));

      setAccessToken(response.access);
      setRefreshToken(response.refresh);
    } catch (err) {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      setUser(null);
      setAccessToken(null);
      setRefreshToken(null);
    }
  }

  /**
   * Verify email function
   * @param {string} token
   */
  async function verifyEmail(token) {
    await authService.verifyEmail(token);

    // If the user is connected, update the store and localStorage
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }

  /**
   * Check if the user is authenticated
   * @return {boolean}
   */
  function isAuthenticated() {
    if (!refreshToken) return false;
    const fromNow = moment(refreshToken.expires).diff(moment());
    return fromNow > 0;
  }

  /**
   * Check if the access token is valid
   * @return {boolean}
   */
  function isAccessTokenValid() {
    if (!accessToken) return false;
    const fromNow = moment(accessToken.expires).diff(moment());
    return fromNow > 0;
  }

  return {
    user,
    accessToken,
    refreshToken,
    refreshPromise,
    login,
    logout,
    refreshTokens,
    setRefreshPromise,
    verifyEmail,
    isAuthenticated,
    isAccessTokenValid,
  };
}
