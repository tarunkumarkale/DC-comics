import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Pages/Register';
import Signin from './Pages/Login';
const Home = () => <h1>Home</h1>;


const App = () => {
    return (
        <BrowserRouter basename="/DC-comics">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LoginForm" element={<LoginForm  />} />
                <Route path="/Signin" element={<Signin  />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
