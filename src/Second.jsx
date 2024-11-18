import React, { useContext } from 'react'
import { ContextFirebase } from './ProperContext/FirebaseContext'


const Second = () => {

const {second,setSecond}=useContext(ContextFirebase)
    const  Spd=()=>{
        setSecond(second+1)
    }
  return (
    <div>
      <button onClick={Spd}>clicksecond</button>
      {second}
    </div>
  )
}

export default Second
