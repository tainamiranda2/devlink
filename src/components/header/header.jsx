import {BiLogOut} from  'react-icons/bi'
import { Link } from 'react-router-dom'
import './header.css'
import {auth} from '../../services/firebase'
import { signOut } from 'firebase/auth'
export function Header(){
    async function handle(){
        await signOut(auth)
        console.log(auth)
    }
    return(
        <header className="admin-header">
            <nav className='nav-header'>
                <button onClick={handle}>
                    <BiLogOut size={28}  color="red"/>
                </button>
                <Link to="/admin">links</Link>
                <Link to="/admin/social">Redes sociais</Link>
            </nav>
        </header>
    )
}