import { useEffect } from "react"
import { apiController } from "../../controller/api.controller"
import { useNavigate } from "react-router-dom"
import Style from "./style.module.css"

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
                <section className={Style.section}>

                    
                    <div className={Style.div}>
                    <h1>Confeitaria dona Maria</h1>
                    <p>Gerencia da confeitaria</p>
                    </div>
                </section>
            </main>
            
            </>

    }
       

