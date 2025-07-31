import { useState, useEffect } from "react";
import style from "./style.module.css";
import { Iconify } from "../../components/iconify/Iconify";

export const Extrato = () => {
    // Simulando dados vindos do Financeiro
    const [totalVendas, setTotalVendas] = useState(0); // valor total vendido no mês
    const [totalCustoProducao, setTotalCustoProducao] = useState(0); // custo de produção do mês
    const [despesasFixas] = useState([
        { id: "1", descricao: "Funcionária", valor: "1200.00" },
        { id: "2", descricao: "Luz", valor: "250.00" },
        { id: "3", descricao: "Água", valor: "80.00" },
        { id: "4", descricao: "Aluguel", valor: "900.00" }
    ]);
    const [totalDespesasFixas, setTotalDespesasFixas] = useState(0);
    const [imposto, setImposto] = useState(0);
    const [lucroFinal, setLucroFinal] = useState(0);

    // Simulação: esses valores viriam do Financeiro no fim do mês
    useEffect(() => {
        // Exemplo: valores vindos do financeiro
        setTotalVendas(1000); // total vendido no mês
        setTotalCustoProducao(400); // custo de produção do mês
    }, []);

    // Calcula totais sempre que mudar algo
    useEffect(() => {
        const despesas = despesasFixas.reduce((acc, d) => acc + parseFloat(d.valor.replace(",", ".")) || 0, 0);
        setTotalDespesasFixas(despesas);

        const lucroBruto = totalVendas - totalCustoProducao;
        const impostoCalculado = lucroBruto * 0.06;
        setImposto(impostoCalculado);

        setLucroFinal(lucroBruto - despesas - impostoCalculado);
    }, [totalVendas, totalCustoProducao, despesasFixas]);

    return (
        <main>
            <h1>Extrato</h1>
            <p>Visualize o extrato mensal da sua confeitaria</p>
            <div className={style.div_visor}>
                <Iconify icon={"ri--money-cny-box-fill"} />
                <h1 className={style.h1_visor}>Extrato</h1>
                <div className={style.div_extrato}>
                    <p className={style.p_extrato}>Total de vendas: R$ {totalVendas.toFixed(2)}</p>
                    <p className={style.p_extrato}>Custo de produção: R$ {totalCustoProducao.toFixed(2)}</p>
                    <p className={style.p_extrato}>Despesas fixas: R$ {totalDespesasFixas.toFixed(2)}</p>
                    <p className={style.p_extrato}>Imposto: R$ {imposto.toFixed(2)}</p>
                    <p className={style.p_extrato}><b>Lucro final (salário): R$ {lucroFinal.toFixed(2)}</b></p>
                </div>
            </div>
            <div className={style.div_resumo}>
                <h2 className={style.h2_resumo}>Resumo do Extrato</h2>
                <p className={style.p_resumo}>Total de vendas: R$ {totalVendas.toFixed(2)}</p>
                <p className={style.p_resumo}>Custo de produção: R$ {totalCustoProducao.toFixed(2)}</p>
                <p className={style.p_resumo}>Despesas fixas: R$ {totalDespesasFixas.toFixed(2)}</p>
                <p className={style.p_resumo}>Imposto: R$ {imposto.toFixed(2)}</p>
                <p className={style.p_resumo}><b>Lucro final (salário): R$ {lucroFinal.toFixed(2)}</b></p>
            </div>
        </main>
    );
}