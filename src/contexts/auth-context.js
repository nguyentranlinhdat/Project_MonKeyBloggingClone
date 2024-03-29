import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { auth, db } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const AuthContext = createContext();
function AuthProvieder(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );
        onSnapshot(docRef, (snapshot) => {
          snapshot.forEach((doc) => {
            setUserInfo({
              ...user,
              ...doc.data(),
            });
          });
        });
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
      // console.log(user);
    });
  });
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}
export { AuthProvieder, useAuth };
