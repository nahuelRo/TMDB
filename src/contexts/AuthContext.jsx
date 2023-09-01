import axios from "axios";
import { createContext, useEffect, useState } from "react";

const authContextDefaultValues = {
  user: null,
  isAuthenticated: false,
  toggleAuth: () => {},
  toggleReload: () => {},
};

export const AuthContext = createContext(authContextDefaultValues);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(authContextDefaultValues);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/auth/secret", { withCredentials: true })
      .then((res) => toggleAuth(res.data))
      .catch(() => console.log("Require login"));
  }, [reload]);

  const toggleAuth = (user) => {
    if (user) {
      setIsLoggedIn({
        user: user,
        isAuthenticated: true,
      });
    } else {
      setIsLoggedIn({
        user: null,
        isAuthenticated: false,
      });
    }
  };

  const toggleReload = () => {
    setReload(!reload);
  };

  return (
    <AuthContext.Provider value={{ ...isLoggedIn, toggleAuth, toggleReload }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
