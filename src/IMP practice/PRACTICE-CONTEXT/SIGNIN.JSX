import React, { useContext, useState } from 'react';
import FirebaseContext from './Context';

const SignIn = () => {
    const { Signin } = useContext(FirebaseContext); // Use the correct context name
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if (email && password) {
            Signin(email, password); // Call the Signin function from context
        } else {
            alert("Please provide both email and password");
        }
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
            <button onClick={handleSignIn}>Login</button>
        </div>
    );
};

export default SignIn;
