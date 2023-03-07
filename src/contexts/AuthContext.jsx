import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        /* currentUser.displayName = "ZenAfro" */
        setUser(currentUser)
    });
  }, []);

  const data = { signup, signin, user };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
export { AuthProvider };
