import { z } from "zod";


export const createUserSchema = z.object({
  name: z.string().min(2, "nome é obrigatório"),
  email: z.string().email(),
  password: z.string()
});

export const returnUserSchema = createUserSchema.extend({
  id: z.number()
}).omit({ password: true });

export const returnAllUsersSchema = returnUserSchema.array();

export const updateUserSchema = createUserSchema.partial();

export const createDespesaSchema = z.object({
  descricao: z.string(),
  valor: z.number()
});

export const returnDespesaSchema = createDespesaSchema.extend({
  id: z.string()
});

export const createProdutoSchema = z.object({
    nome: z.string(),
    preco: z.string(),
    custo: z.string()
});

export const returnProdutoSchema = createProdutoSchema.extend({
    id: z.string()
})

export type CreateUser = z.infer<typeof createUserSchema>;
export type ReturnUser = z.infer<typeof returnUserSchema>;
export type ReturnUsers = z.infer<typeof returnAllUsersSchema>;

export type ICreateDespesa = z.infer<typeof createDespesaSchema>;
export type IReturnDespesa = z.infer<typeof returnDespesaSchema>;
export type ICreateProduto = z.infer<typeof createDespesaSchema>;
export type IReturnProduto = z.infer<typeof returnProdutoSchema>;