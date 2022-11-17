import { useState } from "react";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Logo } from "../../components/logo";
import './login.css'
import {auth} from '../../services/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
const navigate=useNavigate()

    function handleLogin(e){
        e.preventDefault()
        if(email ===''|| password===''){
            alert("Preencha todos os campos")
        return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            //alert("Logado com sucesso")
            navigate("/admin", {replace:true})
        })
        .catch(()=>{
            alert("Erro ao fazer login")
            
        })
    }

return(
    <div className="login-container">
     <Logo/>
    
   <form className="form" onSubmit={handleLogin}> 
    <Input 
    type="email"
    placeholder="Digite seu email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />

     <Input 
     type="password"
    placeholder="Digite sua senha"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
  // autoComplete="on"
    />
   
   <Button type="submit"
    text="Enviar"/>
   </form>
    </div>
)
}