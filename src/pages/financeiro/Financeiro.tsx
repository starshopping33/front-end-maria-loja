import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { Iconify } from "../../components/iconify/Iconify";
//import { useNavigate } from "react-router-dom"
//import { apiController } from "../../controller/api.controller"

interface FinanceiroDespesa {
    id: string;
    descricao: string;
    valor: string;
}

export const Financeiro = () => {
    // Simulando produtos cadastrados (apenas para cálculo)
    const [produtos] = useState<{ id: string; preco: string; custo: string }[]>([
        { id: "1", preco: "8.50", custo: "3.20" },
        { id: "2", preco: "7.00", custo: "2.80" }
    ]);

    const [despesas, setDespesas] = useState<FinanceiroDespesa[]>([]);
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    
    // Totais de vendas e custos dos produtos
    const [totalVendas, setTotalVendas] = useState(0);
    const [totalCustoProducao, setTotalCustoProducao] = useState(0);

    useEffect(() => {
        const vendas = produtos.reduce((acc, p) => acc + parseFloat(p.preco.replace(",", ".")) || 0, 0);
        const custos = produtos.reduce((acc, p) => acc + parseFloat(p.custo.replace(",", ".")) || 0, 0);
        setTotalVendas(vendas);
        setTotalCustoProducao(custos);
    }, [produtos]);

    const handleAddDespesa = (e: React.FormEvent) => {
        e.preventDefault();
        if (!descricao || !valor) return;
        setDespesas([
            ...despesas,
            {
                id: Date.now().toString(),
                descricao: descricao,
                valor: valor
            }
        ]);
        setDescricao("");
        setValor("");
    };

    return (
        <div className={style.body}>
            <main>
                {/* Visor começa aqui */}
                <div className={style.div_visores}>
                    <div className={style.despesaVisor}>
                        <Iconify icon={"marketeq--bill-dollar"} />
                        <h1 className={style.h1_visor}>Despesas</h1>
                        <p className={style.quantidade_visor}>{despesas.length}</p>
                        <p className={style.p_visor}>Despesas cadastradas (Mensal)</p>
                        <p className={style.p_visor}>Custo produção: R$ {totalCustoProducao.toFixed(2)}</p>
                    </div>
                    <div className={style.lucroVisor}>
                        <Iconify icon={"raphael--dollar"} />
                        <h1 className={style.h1_visor}>Vendas</h1>
                        <p className={style.quantidade_visor}>{produtos.length}</p>
                        <p className={style.p_visor}>Total vendido: R$ {totalVendas.toFixed(2)}</p>
                    </div>
                </div>
                {/* Visor acaba aqui */}
                {/* Gestão financeira */}
                <h1 className={style.h1_Gestão_Financeira}>Gestão Financeira</h1>
                <form className={style.div} onSubmit={handleAddDespesa}>
                    <div className={style.divPost}>
                        <div className={style.Descrição}>
                            <fieldset>
                                <section>Descrição</section>
                                <input
                                    type="text"
                                    className={style.Descricao}
                                    placeholder="Ex: Ingrediente"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />
                            </fieldset>
                        </div>
                        <div className={style.Valor}>
                            <fieldset>
                                <section>Valor (R$)</section>
                                <input
                                    type="text"
                                    placeholder="Ex: 250,00 R$"
                                    value={valor}
                                    onChange={e => setValor(e.target.value)}
                                />
                            </fieldset>
                        </div>
                    </div>
                    <button className={style.button} type="submit">Adicionar Despesa</button>
                </form>
                {/* Log das despesas */}
                <ul>
                    {despesas.map((despesa) => (
                        <li key={despesa.id}>
                            {despesa.descricao} - R$ {despesa.valor}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};