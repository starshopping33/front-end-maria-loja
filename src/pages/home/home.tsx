import { useEffect } from "react"
import { apiController } from "../../controller/api.controller"
import { useNavigate } from "react-router-dom"
<<<<<<< HEAD
import style from "./style.module.css"
=======
<<<<<<< HEAD
=======
import Style from "./style.module.css"
import Style from "./style.module.css"
>>>>>>> b88acb7242c501623340e6b4f16dc7d05397af82
>>>>>>> main
export const Home= ()=>{

    const navigate = useNavigate()
    
    const validateUser = async (token:String)=>{
        

        try{
            const res = await apiController.get("/usuarios/retrieve", {
             headers:{
                Authorization: `Bearer ${token}`
            }    
            })
            if(res.data){
                localStorage.setItem("user",JSON.stringify(res.data))
                }
            } catch(error:any){
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                 navigate("/login")
            }

        }
        useEffect(()=>{
            const token = localStorage.getItem("token")
            if(!token){
                navigate("/login")
            }
            else{
                validateUser(token)
            }
        },[])

            return<>
            
            
            <main>
<<<<<<< HEAD
                <section className={style.section}>
=======
                <section>
>>>>>>> main

                    
                    <div className={Style.div}>
                    <h1>Confeitaria dona Maria</h1>
                    <p>Gerencia da confeitaria</p>
                    </div>
                </section>
            </main>
            
            </>

    }
       

