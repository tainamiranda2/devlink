import { Header } from "../../components/header/header";
import { Logo } from "../../components/logo";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import './admin.css'

import {FiTrash2} from 'react-icons/fi'
import { useEffect, useState } from "react";
import {db} from '../../services/firebase'
import { addDoc, collection, onSnapshot,query,orderBy,doc,deleteDoc, snapshotEqual} from "firebase/firestore";
export default function Admin(){
    const [nameInput, setNameInput]=useState("")
    const [urlInput, seturlInput]=useState("")
    const [backgroundColorInput, setbackgroundColorInput]=useState("#fff")
    const [textColorInput, settextColorInput]=useState("#000")
    
    const [links,setLinks]=useState([])
    useEffect(()=>{
        //resgando os dados
        const linksRef=collection(db, "links")
        //ordernar
        const queryRef=query(linksRef, orderBy("created","asc"))
const unsub=onSnapshot(queryRef, (snopshot)=>{
    let lista=[]
    snopshot.forEach((doc)=>{
        lista.push({
            id:doc.id,
            name: doc.data().name,
            url:doc.data().url,
            bg:doc.data().bg,
            color:doc.data().color

    })
  //  console.log(lista)
    
    })
    setLinks(lista)
})

    },[])
async function handleRegister(e){

e.preventDefault()
if(nameInput==='' || urlInput===''){
    alert("preencha todos os campos")
    return
}
//gera ide aleatorio
addDoc(collection(db, 'links'),{
    name:nameInput,
    url:urlInput,
    bg:backgroundColorInput,
    color:textColorInput,
    created:new Date()
})
.then(()=>{
setNameInput("")
seturlInput("")
}).catch((error)=>{
    console.log('erro ao registra'+error)
})

}

   
    return(
        <>
        <Header/>
        <div className="admin-container">
        <Logo/>
   
        <form  className="form" onSubmit={handleRegister}>
            <label  className="label">Nome do link</label>
            <Input 
            type="text"
            name="nameInput" 
            placeholder="Nome do link"
            value={nameInput}
            onChange={(e)=>setNameInput(e.target.value)}
            />
            <label  className="label">Url do link</label>
            <Input 
            type="url" 
            placeholder="Url do link"
            value={urlInput}
            onChange={(e)=>seturlInput(e.target.value)}
            />
            <section className="container-colors">
                <div>
        <label className="label right">  Fund do link  </label>
            <Input type="color"
            value={backgroundColorInput}
            onChange={(e)=>setbackgroundColorInput(e.target.value)}
            />
                </div>
                <div>
        <label className="label right">cor do link</label>
                <Input type="color"
                value={textColorInput}
                onChange={(e)=>settextColorInput(e.target.value)}
                />
                </div>
            </section>

            
{nameInput!==''&&(
    <div className="previws">
    <label className="label">Veja como esta ficando</label>
    <article className="list" style={{backgroundColor: backgroundColorInput}}>
    <p style={{color: textColorInput}}> {nameInput}</p>
    </article>
    </div>
)}
           <Button text="cadastrar"/>
        </form>
        <h2 className="title">Meus links</h2>

       {links.map((item, index)=>(
         <article key={index} 
         className="links"
         style={{backgroundColor: item.bg, 
            color:item.color}}
         >
         <p>{item.name}</p>
         <div>
             <button  className="btn-delete">
                 <FiTrash2 size={28} color="#fff"/>
             </button>
         </div>
     </article>
       ))}
        </div>
        </>
    )
}