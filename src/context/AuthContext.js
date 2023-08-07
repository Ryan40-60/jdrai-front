import { createContext, useState, useEffect } from "react";
import { fromLocalStorage } from "@/services/localStorage.service";
import { login } from "@/services/auth.service";

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

  //   const history = useHistory();

  let loginUser = async (e) => {
    e.preventDefault();
    const usernameOrEmail = e.target.usernameOrEmail.value;
    const password = e.target.password.value;
    const [userData, userError] = login(usernameOrEmail, password);

    if (userError) {
      console.log(userError);
    } else {
      setUser(userData.user);
      setAccessToken(userData.access);
      setRefreshToken(userData.refresh);
      addToLocalStorage("user", user);
      addToLocalStorage("access", access);
      addToLocalStorage("refresh", refresh);
      history.push("/");
    }
  };

  //   let logoutUser = () => {
  //     setAuthTokens(null);
  //     setUser(null);
  //     localStorage.removeItem("authTokens");
  //     history.push("/login");
  //   };

  let contextData = {
    user: user,
    //     authTokens: authTokens,
    //     setAuthTokens: setAuthTokens,
    //     setUser: setUser,
    //     loginUser: loginUser,
    //     logoutUser: logoutUser,
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
