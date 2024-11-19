import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { app } from "../Storage/Firebase";


export const ContextFirebase = createContext(null);

// Custom hook to use Firebase context
export const usefirebase = () => {
  const context = useContext(ContextFirebase);
  if (!context) {
    throw new Error("usefirebase must be used within a ProviderFirebase");
  }
  return context;
};

export const ProviderFirebase = ({ children }) => {
  const SignUpfun = (email, password) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Signup successful"))
      .catch((error) => {
        console.error("Signup Error:", error.code, error.message);
        if (error.code === "auth/network-request-failed") {
          console.error("Network error, please check your internet connection.");
        }
      });
  };

  const SignInfun = (email, password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Sign-in successful"))
      .catch((error) => {
        console.error("Sign-in Error:", error.code, error.message);
        if (error.code === "auth/network-request-failed") {
          console.error("Network error, please check your internet connection.");
        }
      });
  };

  //for ggole auth

  const GoogleAuth=new GoogleAuthProvider()


// wheter user is login or not

const [userisLoggin,setuserisLogin]=useState(null)
const auth=getAuth(app)
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) setuserisLogin(true);
    else setuserisLogin(false);
  });
}, []);

const isLogin=userisLoggin?true:false




  const SignIngoogleAuthProvider=()=>{
    const auth=getAuth(app)
    signInWithPopup(auth,GoogleAuthProvider)
  }

  return (
    <ContextFirebase.Provider value={{ SignUpfun, SignInfun,SignIngoogleAuthProvider,isLogin }}>
      {children}
    </ContextFirebase.Provider>
  );
};
