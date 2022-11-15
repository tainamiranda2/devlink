import { Header } from "../../components/header/header";
import { Logo } from "../../components/logo";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import './admin.css'

import {FiTrash2} from 'react-icons/fi'
export default function Admin(){
    return(
        <>
        <Header/>
        <div className="admin-container">
        <Logo/>
   
        <form  className="form">
            <label  className="label">Nome do link</label>
            <Input type="text" placeholder="Nome do link"/>
            <label  className="label">Url do link</label>
            <Input type="url" placeholder="Url do link"/>
            <section className="container-colors">
                <div>
<label className="label right">Fund do link</label>
<Input type="color"/>
                </div>
                <div>
<label className="label right">cor do link</label>
<Input type="color"/>
                </div>
            </section>
           <Button text="cadastrar"/>
        </form>
        <h2 className="title">Meus links</h2>
        <article>
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