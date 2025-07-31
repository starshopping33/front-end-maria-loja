import React, { useState } from "react";
import style from "./style.module.css";
import { Iconify } from "../../components/iconify/Iconify";
//import { apiController } from "../../controller/api.controller"


export const Produto = () => {
    const [produtos, setProdutos] = useState<{ id: string; name: string; preco: string; custo: string }[]>([]);
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [custo, setCusto] = useState("");

    const handleAddProduto = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nome) return;
        setProdutos([
            ...produtos,
            {
                id: Date.now().toString(),
                name: nome,
                preco: preco,
                custo: custo
            }
        ]);
        setNome("");
        setPreco("");
        setCusto("");
    };

    return (
        <div className={style.body}>
            <main>
                {/* Visor começa aqui */}
                <div className={style.produtoVisor}>
                    <Iconify icon={"ri--cake-3-fill"} />
                    <h1 className={style.h1_visor}>Produtos</h1>
                    <p className={style.quantidade_visor}>{produtos.length}</p>
                    <p className={style.p_visor}>Cupcakes cadastrados</p>
                </div>
                {/* Visor acaba aqui */}
                {/* Gestão de produtos */}
                <h1 className={style.h1_Gestão_De_Produtos}>Gestão de Produtos</h1>
                <form className={style.div} onSubmit={handleAddProduto}>
                    <div>
                        <fieldset className={style.name}>
                            <section>Nome do Cupcake</section>
                            <input
                                type="text"
                                className={style.input_Nome_Cupcake}
                                placeholder="Ex: Red Velvet"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className={style.price_sell}>
                            <section>Preço de Venda (R$)</section>
                            <input
                                type="text"
                                className={style.input_Preço_Venda}
                                placeholder="Ex: 8.50"
                                value={preco}
                                onChange={e => setPreco(e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className={style.custo}>
                            <section>Custo (R$)</section>
                            <input
                                type="text"
                                className={style.input_Custo_R$}
                                placeholder="Ex: 3.20"
                                value={custo}
                                onChange={e => setCusto(e.target.value)}
                            />
                        </fieldset>
                    </div>
                    <button type="submit">Adicionar Produto</button>
                </form>
                {/* Log dos produtos */}
                <ul>
                    {produtos.map((produto) => (
                        <li key={produto.id}>
                            {produto.name} - Venda: R$ {produto.preco} - Custo: R$ {produto.custo}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};