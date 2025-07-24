import style from "./style.module.css"
import { Iconify } from "../../components/iconify/Iconify"
import { useEffect, useState } from "react"
import { apiController } from "../../controller/api.controller"

export const Produto = () => {
    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState ("");
    const [preco, setPreco] = useState ("");
    const [custo, setCusto] = useState ("");

    const submit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const novoProduto = {
           
            name: nome,
            preco: preco,
            custo: custo,
        };
        const res = await apiController.post("/product",novoProduto)
        if(res.data){
            const products = await apiController.get("/product")
            setProdutos(products.data)
        }
        // setProdutos(prev => [...prev, novoProduto]);

        setNome(""); setPreco(""); setCusto("");
    };

    useEffect(() => {

    }, []);

return <main className="body">
    {/* Visor começa aqui */}
    <div className={style.produtoVisor}>
        <h1 className={style.h1_visor}>Produtos</h1>
        <Iconify icon={"ri--cake-3-fill"}/>
        <p className={style.quantidade_visor}>{produtos.length}</p>
        <p className={style.p_visor}>Cupcakes cadastrados</p>
        </div>

            {/* Visor acaba aqui */}
{/* ------------------------------------------------------------------------------- */}
            {/* Gestão de produtos */}
                <h1 className={style.h1_Gestão_De_Produtos}>Gestão de Produtos</h1>
            <form onSubmit={(e)=>submit(e)}>
            <div className={style.div}>
                <div>
                    <fieldset className={style.name}>
                        <section>Nome do Cupcake</section>
                        <label htmlFor="Nome_Do_Cupcake"></label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className={style.input_Nome_Cupcake} placeholder="Ex: Red Velvet"/>
                    </fieldset>
                </div>
                <div>
                    <fieldset className={style.price_sell}>
                        <section>Preço de Venda (R$)</section>
                        <label htmlFor="Preço_De_Venda"></label>
                        <input type="text" value={preco}  onChange={(e) => setPreco(e.target.value)} className={style.input_Preço_Venda} placeholder="Ec:8.50"/>                    
                    </fieldset>
                </div>
                <div>
                    <fieldset className={style.custo}>
                        <section>Custo (R$)</section>
                        <label htmlFor="custo"></label>
                        <input type="text" value={custo} onChange={(e) => setCusto(e.target.value)} className={style.input_Custo_R$} placeholder="Ex: 3.20"/>
                        </fieldset>
                </div>
                <button className="add" type="submit" >+ Adicionar Produto</button>
                </div>
            </form> 
{/* -------------------------------------------------------------------------- */}
        {/* Log dos produtos */}
        <ul>
            {produtos.map((produtos)=>{
                return <li>{produtos.name}</li> 
            })}
        </ul>
    
        {/* Log dos produtos acaba aqui */}
                
</main>


}