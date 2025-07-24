import { useState } from "react"
import { Iconify } from "../iconify/Iconify"
import style from "./style.module.css"
interface InputProps {
    label: string
    type:"text"|"password",
    placeholder:string
    errorMsg?:string
    register:{},
    className?:string
}
export const Input = ({label,type,placeholder,errorMsg,register,className}:InputProps)=>{
    const [newType,setNewType] = useState("password")
    const changeType = ()=>{
        if(newType === "password"){
            setNewType("text")
        }else{
            setNewType("password")
        }
    }
    return <fieldset className={style.fieldset}>
        <label htmlFor={label}>{label}</label>
        {
            type === "password"?
            <>
            <input className={className} type={newType} {...register} placeholder={placeholder} id={label} />
            <Iconify onClick={changeType} className={style.icon} icon="ri:eye-line"/>
            </>
        :
        <input className={className}  {...register} placeholder={placeholder} type={type} id={label}/>
         }
         {errorMsg ? 
                <span className={style.error}>{errorMsg}</span>
                : <span className={style.error}></span> }
        
    </fieldset>
}