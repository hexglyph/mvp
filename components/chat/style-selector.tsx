import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { PopoverProps } from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"
import { useMutationObserver } from "@/hooks/use-mutation-observer"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Style, StyleType } from "@/lib/styles"

interface StyleSelectorProps extends PopoverProps {
  styletypes: readonly StyleType[]
  styles: Style[]
}

export function StyleSelector({ styles, styletypes, ...props }: StyleSelectorProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedStyle, setSelectedStyle] = React.useState<Style>(styles[0])
  const [peekedStyle, setPeekedStyle] = React.useState<Style>(styles[0])

  return (
    <div className="grid gap-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <Label htmlFor="style">Estilo</Label>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-full text-sm"
          side="left"
        >
          O estilo que será criado, como jurídico, técnico, etc.
        </HoverCardContent>
      </HoverCard>
      <Popover open={open} onOpenChange={setOpen} {...props}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Selecione um estilo"
            className="w-full justify-between"
          >
            {selectedStyle ? selectedStyle.name : "Selecione um estilo"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-full p-0">
          <HoverCard>
            <HoverCardContent
              side="left"
              align="start"
              forceMount
              className="w-64 min-h-[280px]"
            >
              <div className="grid gap-2">
                <h4 className="font-medium leading-none">{peekedStyle.name}</h4>
                <div className="text-sm text-muted-foreground">
                  {peekedStyle.description}
                </div>
                {peekedStyle.strengths ? (
                  <div className="mt-4 grid gap-2">
                    <h5 className="text-sm font-medium leading-none">
                      Características
                    </h5>
                    <ul className="text-sm text-muted-foreground">
                      {peekedStyle.strengths}
                    </ul>
                  </div>
                ) : null}
              </div>
            </HoverCardContent>
            <Command loop>
              <CommandList className="w-96 h-[var(--cmdk-list-height)] max-h-[400px]">
                <CommandInput placeholder="Pesquisar estilos..." />
                <CommandEmpty>Nenhum estilo encontrado.</CommandEmpty>
                <HoverCardTrigger />
                {styletypes.map((type) => (
                  <CommandGroup key={type} heading={type}>
                    {styles
                      .filter((style) => style.styletypes === type)
                      .map((style) => (
                        <StyleItem
                          key={style.id}
                          style={style}
                          isSelected={selectedStyle?.id === style.id}
                          onPeek={(style) => setPeekedStyle(style)}
                          onSelect={() => {
                            setSelectedStyle(style)
                            setOpen(false)
                          }}
                        />
                      ))}
                  </CommandGroup>
                ))}
              </CommandList>
            </Command>
          </HoverCard>
        </PopoverContent>
      </Popover>
    </div>
  )
}

interface StyleItemProps {
  style: Style
  isSelected: boolean
  onSelect: () => void
  onPeek: (style: Style) => void
}

function StyleItem({ style, isSelected, onSelect, onPeek }: StyleItemProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  useMutationObserver(ref, (mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes") {
        if (mutation.attributeName === "aria-selected") {
          onPeek(style)
        }
      }
    }
  })

  return (
    <CommandItem
      key={style.id}
      onSelect={onSelect}
      ref={ref}
      className="aria-selected:bg-primary aria-selected:text-primary-foreground"
    >
      {style.name}
      <CheckIcon
        className={cn(
          "ml-auto h-4 w-4",
          isSelected ? "opacity-100" : "opacity-0"
        )}
      />
    </CommandItem>
  )
}
