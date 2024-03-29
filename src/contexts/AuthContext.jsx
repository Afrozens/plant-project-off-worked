import { createContext, useState, useEffect } from "react";
import {
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/services/firebase";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loadingGetUser, setLoadingGetUser] = useState(true);


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAccessToken(currentUser?.accessToken);
      console.log(currentUser);
      setLoadingGetUser(false);
      setUser({
        email: currentUser?.email,
        username: currentUser?.displayName,
        uid: currentUser?.uid,
        photoURL: currentUser?.photoURL
      });
    });

    return () => unSubscribe();
  }, []);

  const logout = () => signOut(auth);

  const data = {
    logout,
    user,
    accessToken,
    loadingGetUser,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
export { AuthProvider };
