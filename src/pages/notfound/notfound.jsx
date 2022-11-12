import { Logo } from "../../components/logo";

import { Link } from 'react-router-dom';
import './style.css';

export default function NotFound(){
    return(
        <div className='error'>
            <Logo/>
        <h1>Página 404</h1>
        <Link className='link' to="/">
            Voltar para a home
            </Link>
        </div>
    )
}