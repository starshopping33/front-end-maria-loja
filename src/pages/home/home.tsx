import { useEffect } from "react"

import { useNavigate } from "react-router-dom"
import Style from "./style.module.css"
import { Header } from "../../components/Header/header"



    export const Home = () => {
        const navigate = useNavigate()
        
    //     const validateUser = async (token: string) => {
    //         try {
    //             const res = await apiController.get("/usuarios/retrieve", {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             })
    //             if (res.data) {
    //                 localStorage.setItem("user", JSON.stringify(res.data))
    //             }
    //         } catch (error: any) {
    //             localStorage.removeItem("token")
    //             localStorage.removeItem("user")
    //             navigate("/login")
    //         }
    //     }
    
    //     useEffect(() => {
    //         const token = localStorage.getItem("token")
    //         if (!token) {
    //             navigate("/login")
    //         }
    //         else {
    //             validateUser(token)
    //         }
    //     }, [])
    
        return <>

         <Header/>
            <main>

                <div className={Style.div}>
                <div className={Style.cupcakeLeft}>🧁</div>
      
      <div className={Style.titleContainer}>
        <h1 className={Style.title}>Confeitaria Dona Maria</h1>
        <p className={Style.subtitle}>🔴 Gerenciamento da confeitaria 🔴</p>
      </div>
      
      <div className={Style.cupcakeRight}>🧁</div>



                </div>
                  
      
      
            </main>
        </>
    }
      

