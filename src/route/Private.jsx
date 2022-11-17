
import {auth} from '../services/firebase'
//verifica se esta logado
import {onAuthStateChanged} from  'firebase/auth'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Private({children}){

const [loogding, setLooding]=useState(true)

const [signed, setSigned]=useState(false)
//verificando usuarios
//console.log(signed)

useEffect(()=>{
async function checkLogin(){
    const userL=onAuthStateChanged(auth,(user)=>{
      if(user ){
        const userData={
           uid :user.uid,
            email:user.email
        }
      // console.log(userData)
        //console.log(user)
        //salvar algo no localstoge
    localStorage.setItem("@detailUser",
     JSON.stringify(userData))
     
setLooding(false)     
setSigned(true)
//console.log(localStorage)
} else{
       
setLooding(false)     
setSigned(false)
}
   
    })
}

checkLogin()
},[]);


if(loogding){
    return <div>Carregando</div>
}

if(signed){
/*   return <Navigate to='/login'/>*/
    
}
    return children;

}