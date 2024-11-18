import { createContext, useState } from "react";


export const ContextFirebase = createContext(null);

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { app } from "../Storage/Firebase";



export const ProviderFirebase = ({ children }) => {
    const auth = getAuth(app);
// const SignUpfun=(email, password)=>{
//     const auth = getAuth(app);
//     createUserWithEmailAndPassword(auth, email, password).then(()=>console.log('get success sign up ')).catch((error)=>console.log(error))
//     }
// const SignInfun=(email, password)=>{
//     const auth = getAuth(app);
//     signInWithEmailAndPassword (auth, email, password).then(()=>console.log('get success sign in ')).catch((error)=>console.log(error))
//     }
const SignUpfun = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully");
    } catch (error) {
      if (error.code === "auth/network-request-failed") {
        console.error("Network error: Please check your internet connection.");
      } else {
        console.error("Error during sign-up: ", error.message);
      }
    }
  };
  
  const SignInfun = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
    } catch (error) {
      if (error.code === "auth/network-request-failed") {
        console.error("Network error: Please check your internet connection.");
      } else {
        console.error("Error during sign-in: ", error.message);
      }
    }
  };

    
    return (
        <ContextFirebase.Provider value={{SignUpfun,SignInfun}}>
            {children}
        </ContextFirebase.Provider>
    );
};
