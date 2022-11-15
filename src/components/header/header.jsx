import {BiLogOut} from  'react-icons/bi'
import { Link } from 'react-router-dom'
import './header.css'
export function Header(){
    return(
        <header className="admin-header">
            <nav className='nav-header'>
                <button>
                    <BiLogOut size={28}  color="red"/>
                </button>
                <Link to="/admin">links</Link>
                <Link to="/admin">Redes sociais</Link>
            </nav>
        </header>
    )
}