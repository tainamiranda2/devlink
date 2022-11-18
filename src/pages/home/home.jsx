import { Logo } from "../../components/logo";
import { Social } from "../../components/social/social";
import './home.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import { useEffect, useState } from "react";
import {db} from '../../services/firebase'
import {  collection,query,orderBy, getDocs, doc, getDoc} from "firebase/firestore";

export default function Home(){

const [links, setLinks]=useState([])
const [socialLink, setSocialLinks]=useState({})
  useEffect(()=>{

function loadLinks(){
  const linkRef=collection(db, "links")
  const queryRef=query(linkRef, orderBy("created", "asc"))

  getDocs(queryRef)
  .then((snapshot)=>{
    let lista=[];
    snapshot.forEach((doc)=>{
      lista.push({
        id:doc.id,
        name:doc.data().name,
        url:doc.data().url,
        bg:doc.data().bg,
        color:doc.data().color
      })
    })
    setLinks(lista)
  })
}

loadLinks()

  },[])

  useEffect(()=>{
    function loadSocialLinks(){
      const docRef=doc(db, "social", "link")
      getDoc(docRef)
      .then((snapshot)=>{
      if(snapshot.data() !==undefined){
        setSocialLinks({
          facebook:snapshot.data().facebook,
          instagram:snapshot.data().instagram,
          github:snapshot.data().github
        })
      }
      })
    }

    loadSocialLinks()

  },[])
    return(
        <div className="home-container">
        <Logo/>
      <h1>Bem-vindo</h1>  
      <span>Veja mais link</span>
      <main className="links">
      {links.map((item)=>(
      <section key={item.id} className="link-area" 
      style={{backgroundColor:item.bg}}>
        <a href={item.url} >
          <p style={{color:item.color}} className="link-text">{item.name} </p>
        </a>
      </section>
      ))}

  {links.length!==0 && Object.keys(socialLink.length > 0 &&(
      <footer> 
      <Social url={socialLink?.facebook}>
        <FaFacebook size={35} color='fff'/>
      </Social>
      <Social url={socialLink?.instagram}>
        <FaInstagram size={35} color='fff'/>
      </Social>
      </footer>
  ))}
      </main>
     
        </div>
    )
}