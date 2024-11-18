import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Storage/Firebase';


const Login = () => {


const [email,setemail]=useState('')
const [password,setpassword]=useState('')


const SIGN=()=>{
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password).then(alert(`sucess`))
}


  return (
    <div>
      <input type="text" onChange={(e)=>setemail(e.target.value)} value={email} placeholder='here is email' />
      <input type="text" onChange={(e)=>setpassword(e.target.value)}  value={password} placeholder='here is password'/>
   <button onClick={SIGN}>Login</button>
    </div>
  )
}

export default Login
