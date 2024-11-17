import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { app } from "../Storage/Firebase";
import { GoogleAuthProvider } from "firebase/auth";
// Create a Context
export const FirebaseContext = createContext(null);

// Context Provider Component
export const FirebaseProvider = ({ children }) => {
          // google

    const googleProvider = new GoogleAuthProvider();


    const auth = getAuth(app);

    // Function for user signup
    const Signup = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
            .then(() => console.log("Signup success"))
            .catch((error) => console.error("Signup error:", error));
    };

    // Function for user signin
    const Signin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => console.log("Signin success"))
            .catch((error) => console.error("Signin error:", error));
    };



    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => console.log("Google Sign-In success:", result.user))
            .catch((error) => console.error("Google Sign-In error:", error));
    };

    return (
        <FirebaseContext.Provider value={{ Signup, Signin,googleprovider,googleSignIn }}>
            {children}
        </FirebaseContext.Provider>
    );
};

// Export the context for use in other components
export default FirebaseContext;
