import style from "./style.module.css"
import { Iconify } from "../../components/iconify/Iconify"
//import { apiController } from "../../controller/api.controller"

export const Produto=()=>{
    


    const produtos = [
    {id:"1",name:'asda'}
]


return <>

<body className={style.body}>
    
<main>
    {/* Visor começa aqui */}
    <div className={style.produtoVisor}>
        <Iconify icon={"ri--cake-3-fill"}/>
        <h1 className={style.h1_visor}>Produtos</h1>
        <p className={style.quantidade_visor}>0</p>
        <p className={style.p_visor}>Cupcakes cadastrados</p>
        </div>

            {/* Visor acaba aqui */}
{/* ------------------------------------------------------------------------------- */}
            {/* Gestão de produtos */}
                <h1 className={style.h1_Gestão_De_Produtos}>Gestão de Produtos</h1>
            <div className={style.div}>
                <div>
                    <fieldset className={style.name}>
                        <section>Nome do Cupcake</section>
                        <label htmlFor="Nome_Do_Cupcake"></label>
                        <input type="text" className={style.input_Nome_Cupcake} placeholder="Ex: Red Velvet"/>
                    </fieldset>
                </div>
                <div>
                    <fieldset className={style.price_sell}>
                        <section>Preço de Venda (R$)</section>
                        <label htmlFor="Preço_De_Venda"></label>
                        <input type="text" className={style.input_Preço_Venda} placeholder="Ec:8.50"/>                    
                    </fieldset>
                </div>
                <div>
                    <fieldset className={style.custo}>
                        <section>Custo (R$)</section>
                        <label htmlFor="custo"></label>
                        <input type="text" className={style.input_Custo_R$} placeholder="Ex: 3.20"/>
                    </fieldset>
                </div>
{/* -------------------------------------------------------------------------- */}
        {/* Log dos produtos */}
        <ul>
            {produtos.map((produto)=>{
                return <li>{produto.name}</li>
            })}
        </ul>
    </div>
        {/* Log dos produtos acaba aqui */}
                
</main>
</body>
</>
}