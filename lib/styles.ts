export const styletypes = [""] as const

export type StyleType = (typeof styletypes)[number]

export interface Style<Type = string> {
  id: string
  name: string
  description: string
  strengths?: string
  styletypes: Type
}

export const styles: Style<StyleType>[] = [
  {
    id: "c305f976-8e38-42b1-9fb7-d21b2e34f0da",
    name: "Jurídico",
    description:
      "Estilo jurídico formal, com linguagem técnica e rebuscada.",
    styletypes: "",
    strengths:
      "Sua linguagem é mais adequada para o público jurídico, mas pode ser usada para outros fins.",
  },
  {
    id: "ac0797b0-7e31-43b6-a494-da7e2ab43445",
    name: "Técnico",
    description: "Estilo técnico formal, com linguagem técnica e rebuscada.",
    styletypes: "",
    strengths: "É mais adequado para o público técnico, mas pode ser usado para outros fins.",
  },
  {
    id: "be638fb1-973b-4471-a49c-290325085802",
    name: "Processual",
    description:
      "Processual é ideal para a redação de peças processuais, com linguagem técnica e rebuscada.",
    styletypes: "",
    strengths:
      "É mais adequado para o público jurídico, mas pode ser usado para outros fins.",
  },
]
