import React, { useEffect, useState } from "react";
import { usefirebase } from "../ProperContext/FirebaseContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { SignInfun ,SignIngoogleAuthProvider,isLogin } = usefirebase(); // Use the custom hook for cleaner code
  const [formData, setFormData] = useState({ email: "", password: "" });
const Navigate=useNavigate()


useEffect(()=>{Navigate("/")},[])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    console.log("Form Data Submitted: ", formData);

    if (email && password) {
      SignInfun(email, password); // Call SignUpfun with valid email and password
    } else {
      console.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 bg-slate-500 rounded-xl ">
          Signin 🕹️
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 block w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
  <button
          type="submit"
          className=" bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 w-[40%] m-1"
        >
          Signin
        </button>
     
     
      </form>
      <div>
      <button className="bg-green-400 text-white w-[60%] rounded-xl m-1 active:bg-green-900" onClick={SignIngoogleAuthProvider}> Signin With Google</button></div>
    </div>
  );
};

export default Signin;
