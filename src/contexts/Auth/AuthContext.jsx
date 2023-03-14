import {
  createContext /* useEffect, useState */,
  useState,
  useEffect,
} from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loadingGetUser, setLoadingGetUser] = useState(true);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAccessToken(currentUser?.accessToken);
      console.log(currentUser)
      setLoadingGetUser(false);
      setUser({
        email: currentUser?.email,
        username: currentUser?.displayName,
        uid: currentUser?.uid,
      });
    });

    return () => unSubscribe();
  }, []);

  const logout = () => signOut(auth);

  const data = {
    signup,
    logout,
    resetPassword,
    user,
    accessToken,
    loadingGetUser,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
export { AuthProvider };
