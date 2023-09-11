export const types = ["Microsoft", "AWS", "Google", "Facebook", "Etc"] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
  id: string
  name: string
  description: string
  strengths?: string
  type: Type
}

export const models: Model<ModelType>[] = [
  {
    id: "c305f976-8e38-42b1-9fb7-d21b2e34f0da",
    name: "GPT-4",
    description:
      "O modelo mais poderoso do GPT-4.",
    type: "Microsoft",
    strengths:
      "Intenção complexa, causa e efeito, geração criativa, pesquisa, resumo para o público",
  },
  {
    id: "464a47c3-7ab5-44d7-b669-f9cb5a9e8465",
    name: "GPT-3.5",
    description: "Muito capaz, mas mais rápido e mais barato que o GPT-4.",
    type: "Microsoft",
    strengths:
      "Tradução de idiomas, classificação complexa, sentimento, resumo",
  },
  {
    id: "ac0797b0-7e31-43b6-a494-da7e2ab43445",
    name: "GPT-3",
    description: "Capaz de tarefas simples, muito rápido e mais barato.",
    type: "Microsoft",
    strengths: "Classificação moderada, pesquisa semântica",
  },
  {
    id: " be638fb1-973b-4471-a49c-290325085802",
    name: "Bard",
    description:
      "Bard é um modelo de linguagem de IA de código aberto para gerar texto de ficção. Ele é treinado em 11.000 livros de ficção de domínio público.",
    type: "Google",
    strengths:
      "Análise de texto, classificação simples, correção de endereço, palavras-chave",
  },
  {
    id: "b43c0ea9-5ad4-456a-ae29-26cd77b6d0fb",
    name: "Llama2-30B",
    description:
      "Llama2-30B é um modelo de linguagem de IA de código aberto para gerar texto de ficção. Ele é treinado em 11.000 livros de ficção de domínio público.",
    type: "Facebook",
  },
  {
    id: "bbd57291-4622-4a21-9eed-dd6bd786fdd1",
    name: "Falcon-180B",
    description:
      "Falcon é um modelo de linguagem de IA de código aberto para gerar texto de ficção. Ele é treinado em 11.000 livros de ficção de domínio público.",
    type: "Etc",
    strengths: "Aplicação em tempo real onde a baixa latência é preferível",
  },
]
