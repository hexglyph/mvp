import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "contrato",
    label: "Contrato",
  },
  {
    value: "justificativa-tecnica",
    label: "Justificativa técnica",
  }
]

export const statuses = [
  {
    value: "finished",
    label: "Finalizado",
    icon: ArrowDownIcon,
  },
  {
    value: "in progress",
    label: "Em andamento",
    icon: StopwatchIcon,
  }
]
