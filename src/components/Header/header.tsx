import { Link, useNavigate } from "react-router-dom"
import { Iconify } from "../iconify/Iconify"
import style from "./style.module.css"

export const Header =()=>{

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const token = localStorage.getItem("token")

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/login")
    }

    return <header className={style.header}>

    <div className={style.ZZZZZ}>
        <h1>Gerenciamento de Gestoes</h1>
    </div>

<div className={style.botoes}>
    

        <nav>
            
            
            <button
            
                onClick={() => navigate("/")}
                className={style.perfilbotao}
                > Home
              </button>

            <button
            
                onClick={() => navigate("/extrato")}
                className={style.perfilbotao}
            > Extrato
              
            </button>

            <button
            
                onClick={() => navigate("/financeiro")}
                className={style.perfilbotao}
            > Financeiro
              
            </button>

            <button
            
                onClick={() => navigate("/produto")}
                className={style.perfilbotao}
            > Produtos
              
            </button>
            

        </nav>
</div>

       
    </header>
}