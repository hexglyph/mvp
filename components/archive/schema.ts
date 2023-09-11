import { z } from "zod"

export const archiveSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
})

export type Archive = z.infer<typeof archiveSchema>
