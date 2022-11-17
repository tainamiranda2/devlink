import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'
import NotFound from '../pages/notfound/notfound'
import Private from './Private'
import NetWorks from '../pages/netwroks/networks'

export default function Router (){

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>  
            
            <Route path='/admin' element={<Private><Admin/></Private> }/>
          
            <Route path='/admin/social' element={<Private><NetWorks/></Private>}/>  
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}