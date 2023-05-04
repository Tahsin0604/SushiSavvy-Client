import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  //useState hook
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //google Provider
  const googleAuthProvider = new GoogleAuthProvider();
  //github Provider
  const githubAuthProvider = new GithubAuthProvider();

  //create user with email and pass
  const signUpUserWithEmailPassword = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signin user with email and pass
  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google signin
  const signinWithGoogle = () => {
    setLoading(false);
    return signInWithPopup(auth, googleAuthProvider);
  };

  //github signin
  const signinWithGithub = () => {
    setLoading(false);
    return signInWithPopup(auth, githubAuthProvider);
  };

  //logout
  const logOut = () => {
    return signOut(auth);
  };

  //value
  const authInfo = {
    user,
    loading,
    signIn,
    signUpUserWithEmailPassword,
    signinWithGoogle,
    signinWithGithub,
    logOut,
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (loogedUser) => {
      setUser(loogedUser);
      setLoading(false);
    });
    return () => unSubscribed();
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
