import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/home/home"
import { Login } from "../pages/login/Login"
import { Produto } from "../pages/produto/Produto"
import { Financeiro } from "../pages/financeiro/Financeiro"
export function MainRoutes(){

    return <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/produto" element={<Produto/>}/>
        <Route path="/financeiro" element={<Financeiro/>}/>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
}