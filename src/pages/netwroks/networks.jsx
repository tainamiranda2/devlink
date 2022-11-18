import './networks.css'
import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { useEffect, useState } from 'react';
import { db} from '../../services/firebase';

import {setDoc, doc, getDoc} from  'firebase/firestore'
export default function NetWorks(){
    const [facebook,setFacebook]=useState("")
    const [instagram,setInstagram]=useState("")
    const [github,setGithub]=useState("")

 function handleSalvar(e){
    e.preventDefault()
setDoc(doc(db,'social', 'link'), {
    facebook:facebook,
    instagram:instagram,
    github:github
})
.then(()=>{
    console.log("Urls salvas com ucesso")
})
.catch((error)=>{
    console.log(error)
})

}
useEffect(()=>{
     function loadList(){
        const docRef=doc(db, 'social', 'link')
    getDoc(docRef)
    .then((snapshet)=>{
       // console.log(snapshet.data())

        if(snapshet.data() !==undefined){
            setFacebook(snapshet.data().facebook)
            setInstagram(snapshet.data().instagram)
            setGithub(snapshet.data().github)
        }

    }).catch((error)=>{
console.log(error)
    })
        
        

    }
    loadList()
},[])

    return(
        <div className='admin-container'>

        <Header/>
        <h1 className='title-social'>Suas redes socias</h1>
        <form className='form' onSubmit={handleSalvar}>
            <label>Link do facebook</label>
            <Input 
            type="url"
              value={facebook}
              onChange={(e)=>setFacebook(e.target.value)}
            placeholder="Digite a url do facebook"/>
            <label>Link do instagram</label>
            <Input
                    type="url"
              value={instagram}
              onChange={(e)=>setInstagram(e.target.value)}
             placeholder="Digite a url do instagram"/>
            <label>Link do github</label>
            <Input
                    type="url"
              value={github}
              onChange={(e)=>setGithub(e.target.value)}
             placeholder="Digite a url do github"/>
       <Button text="Salvar"/>
        </form>

        </div>
    )
}