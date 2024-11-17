import React, { useContext, useState } from 'react';
import FirebaseContext from './Context';

const Signup = () => {
    const { Signup, googleSignIn } = useContext(FirebaseContext); // Use context functions
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        if (email && password) {
            Signup(email, password); // Call the Signup function from context
        } else {
            alert("Please provide both email and password");
        }
    };

    const handleGoogleSignup = () => {
        googleSignIn(); // Call Google Sign-In from context
    };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
            />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your password"
            />
            <button onClick={handleSignup}>Signup</button>
            <button onClick={handleGoogleSignup}>Signup with Google</button>
        </div>
    );
};

export default Signup;
