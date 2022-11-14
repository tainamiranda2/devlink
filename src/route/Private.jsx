
import {auth} from '../services/firebase'
//verifica se esta logado
import {onAuthStateChanged} from  'firebase/auth'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
export default function Private({children}){

const [loogding, setLooding]=useState(true)

const [signed, setSigned]=useState(false)
//verificando usuarios
useEffect(()=>{
async function checkLogin(){
    const userL=onAuthStateChanged(auth,(user)=>{
      if(user){
        const userData={
           idToken :user.idToken,
            email:user.email
        }
        //salvar algo no localstoge
    localStorage.setItem("@DetailUser", JSON.stringify(userData))
setLooding(false)     
setSigned(true)
} else{
    setLooding(false)
    setSigned(false)
}
   
    })
}
checkLogin()
},[]);

if(loogding){
    return <div>oi</div>
    
}

if(signed){
    return <Navigate to='/login'/>
    
}
    return children;

}