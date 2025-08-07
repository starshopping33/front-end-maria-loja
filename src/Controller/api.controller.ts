import axios from "axios"
import type { iCreateLogin } from "../schemas/login.schemas"
import type { ICreateDespesa } from "../schemas/usuario.schemas"


export const service = axios.create({
    baseURL:"http://localhost:3001",
    timeout: 6000,
})
export const apiController = {
    login:async(loginData:iCreateLogin)=>{
        const res = await service.post("/login",loginData)
        return res.data
    },
      getFinanceiro: async ()=> {
        const res= await service.get("/financeiro")
         return res.data
    },
    postFinanceiro: async (novaFinanceiro: ICreateDespesa) => {
        const res= await service.post("financeiro", novaFinanceiro)
         return res.data
    },

    getProduto: async ()=> {
        const res = await service.get("/produto")
        return res.data
    },
    postProduto: async (novaProduto:any ) => {
        const res = await service.post("produto", novaProduto)
        return res.data
    },
    getExtrato: async ()=> {
        const res = await service.get("/extrato")
        return res.data
    }



    // getMovies:async()=>{
    //     return await a.get("/movies")
    // },
    // favorito:async(idfilme:string)=>{
    //     return await a.post(`/${idfilme}`,idfilme)
    // },
    
}
