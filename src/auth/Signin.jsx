import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Storage/Firebase';

const Signin = () => {
    


        const [email,setemail]=useState('')
        const [password,setpassword]=useState('')
        
        
        const SIGN=()=>{
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email, password).then((value)=> console.log(`hello`)).catch(err=>console.log(err))
        }
  return (
    <div>
    <input type="text" onChange={(e)=>setemail(e.target.value)} value={email} placeholder='here is email' />
    <input type="text" onChange={(e)=>setpassword(e.target.value)}  value={password} placeholder='here is password'/>
 <button onClick={SIGN}>Login</button>
  </div>
  )
}

export default Signin
