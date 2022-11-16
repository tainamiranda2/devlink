import { Header } from "../../components/header/header";
import { Logo } from "../../components/logo";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import './admin.css'

import {FiTrash2} from 'react-icons/fi'
import { useState } from "react";
export default function Admin(){
    const [nameInput, setNameInput]=useState("")
    const [urlInput, seturlInput]=useState("")
    const [backgroundColorInput, setbackgroundColorInput]=useState("#fff")
    const [textColorInput, settextColorInput]=useState("#000")
    
   //previwe
    return(
        <>
        <Header/>
        <div className="admin-container">
        <Logo/>
   
        <form  className="form">
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
            <div className="previws">
            <label className="label">Veja como esta ficando</label>
            <article className="list" style={{backgroundColor: backgroundColorInput}}>
            <p style={{color: textColorInput}}> {nameInput}</p>
            </article>
            </div>

           <Button text="cadastrar"/>
        </form>
        <h2 className="title">Meus links</h2>
        <article className="links">
            <p>Grupo exclusiva do telegram</p>
            <div>
                <button  className="btn-delete">
                    <FiTrash2 size={28} color="#fff"/>
                </button>
            </div>
        </article>
        </div>
        </>
    )
}