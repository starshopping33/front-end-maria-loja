import style from "./style.module.css"
import { Iconify } from "../../components/iconify/Iconify"
//import { useNavigate } from "react-router-dom"
//import { apiController } from "../../controller/api.controller"

export const Financeiro=()=>{
    // const navigate = useNavigate()

    //  try {
    //      const res = await apiController.get("Produtos/Post",{
    //          headers:{
                
    //      }
    //     })
    // } catch (error) {
        
    // }
const despesas = [
    {id:"1",name:'Sobrinha 1200R$'}
]


return <>
<body className={style.body}>
    
<main>

    {/* Visor começa aqui */}

<div className={style.div_visores}>

    <div className={style.despesaVisor}>
        <Iconify icon={"marketeq--bill-dollar"}/>
        <h1 className={style.h1_visor}>Despesas</h1>
        <p className={style.quantidade_visor}>0</p>
        <p className={style.p_visor}>Despesas cadastradas (Mensal)</p>
        </div>
        <div className={style.lucroVisor}>
        <Iconify icon={"raphael--dollar"}/>
        <h1 className={style.h1_visor}>Lucro</h1>
        <p className={style.quantidade_visor}>0</p>
        <p className={style.p_visor}>Lucro cadastrado (Mensal)</p>
        </div>
       
</div>

            {/* Visor acaba aqui */}
{/* ------------------------------------------------------------------------------- */}
            {/* Gestão de produtos */}
                <h1 className={style.h1_Gestão_Financeira}>Gestão Financeira</h1>
    <div className={style.div}>
            <div>
                <div className={style.Descrição}>
                    <fieldset>
                        <section>Descrição</section>
                        <label htmlFor="Descricao"></label>
                        <input type="text" className={style.Descricao} placeholder="Ex: Ingrediente"/>
                    </fieldset>
                </div>
                <div className={style.Valor}>
                    <fieldset>
                        <section>Valor (R$)</section>
                        <label htmlFor="Valor"></label>
                        <input type="text" placeholder="Ex: 250,00 R$"/>                    
                    </fieldset>
                </div>
            </div>
{/* -------------------------------------------------------------------------- */}
        {/* Log dos produtos */}
        <ul>
            {despesas.map((despesa)=>{
                return <li>{despesa.name}</li>
            })}
        </ul>
    </div>
        {/* Log dos produtos acaba aqui */}
                
    </main>
</body>
</>
}