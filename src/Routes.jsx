import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import NotFound from './pages/notfound/notfound'

export default function Router (){

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>  
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}