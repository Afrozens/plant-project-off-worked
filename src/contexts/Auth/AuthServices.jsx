import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const signin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

/* export const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
  console.log(currentUser)
  return currentUser
}); */
