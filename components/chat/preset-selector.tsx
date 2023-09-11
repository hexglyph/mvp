import * as React from "react"
import { useRouter } from "next/navigation"
import { CaretSortIcon, CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { PopoverProps } from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Preset } from "@/lib/presets"
import { Input } from "@/components/ui/input"

interface PresetSelectorProps extends PopoverProps {
  presets: Preset[]
}

export function PresetSelector({ presets, ...props }: PresetSelectorProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedPreset, setSelectedPreset] = React.useState<Preset>()
  const router = useRouter()

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Selecionar template"
          aria-expanded={open}
          className="flex-1 justify-between md:max-w-full lg:max-w-full"
        >
          {selectedPreset ? selectedPreset.name : "Selecionar template"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Pesquisar template..." />
          <CommandEmpty>Nenhum template encontrado.</CommandEmpty>
          <CommandGroup heading="Examples">
            {presets.map((preset) => (
              <CommandItem
                key={preset.id}
                onSelect={() => {
                  setSelectedPreset(preset)
                  setOpen(false)
                }}
              >
                {preset.name}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedPreset?.id === preset.id
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup className="pt-0">
            <Input className="mb-1 file:border file:border-sky-700 file:hover:border-sky-500 file:bg-primary file:text-primary-foreground file:rounded-md file:p-1 p-1" type="file" placeholder="..." />
            <Button className="border border-sky-700 hover:border-sky-500 gap-2 " type="submit">
              Adicionar template
              <PlusCircledIcon className="h-4 w-4" />
            </Button>
          </CommandGroup>
          <CommandGroup className="pt-0">
            <CommandItem onSelect={() => router.push("/")}>
              + Criar novo template
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
