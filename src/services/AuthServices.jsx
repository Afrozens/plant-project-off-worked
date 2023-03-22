import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

export const signin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signup = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const updateUser = (username, photoURL = null) =>
  updateProfile(auth.currentUser, {
    displayName: username,
    photoURL: photoURL,
  });
