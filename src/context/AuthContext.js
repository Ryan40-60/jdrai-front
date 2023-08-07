import { createContext, useState, useCallback } from "react";
import { fromLocalStorage } from "@/services/localStorage.service";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const access = fromLocalStorage("access");
  const refresh = fromLocalStorage("refresh");

  const [accessToken, setAccessToken] = useState(access ? access.token : null);
  const [refreshToken, setRefreshToken] = useState(
    refresh ? refresh.token : null
  );
  const [user, setUser] = useState(fromLocalStorage("user"));
  //   let [loading, setLoading] = useState(true);

  //   const loginUser = useCallback(async (e) => {
  //     e.preventDefault();
  //     const body = {
  //       usernameOrEmail: e.target.usernameOrEmail.value,
  //       password: e.target.password.value,
  //     };
  //     const [userData, userError] = await login(body);

  //     if (userError) {
  //       console.log(userError);
  //     } else {
  //       setUser(userData.user);
  //       setAccessToken(userData.access);
  //       setRefreshToken(userData.refresh);
  //       addToLocalStorage("user", userData.user);
  //       addToLocalStorage("access", userData.access);
  //       addToLocalStorage("refresh", userData.refresh);
  //       router.push("/");
  //     }
  //   }, []);

  //   let logoutUser = () => {
  //     setAuthTokens(null);
  //     setUser(null);
  //     localStorage.removeItem("authTokens");
  //     history.push("/login");
  //   };

  let contextData = {
    user: user,
    setUser: setUser,
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    refreshToken: refreshToken,
    setRefreshToken: setRefreshToken,
  };

  //   useEffect(() => {
  //     if (authTokens) {
  //       setUser(jwt_decode(authTokens.access));
  //     }
  //     setLoading(false);
  //   }, [accessToken, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {/* {loading ? null : children} */}
      {children}
    </AuthContext.Provider>
  );
};
