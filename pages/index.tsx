import * as React from "react"

import { DownloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { Textarea } from "@/components/ui/textarea"

import { MaxLengthSelector } from "@/components/chat/maxlength-selector"
import { StyleSelector } from "@/components/chat/style-selector"
import { ModelSelector } from "@/components/chat/model-selector"
import { PresetSelector } from "@/components/chat/preset-selector"
import { TemperatureSelector } from "@/components/chat/temperature-selector"
import { models, types } from "@/lib/models"
import { styles, styletypes } from "@/lib/styles"
import { presets } from "@/lib/presets"
import Layout from "@/components/layout"
import { DownloadCloudIcon, SendHorizontalIcon } from "lucide-react"
import { ReferenceItem } from "@/components/reference/referenceItem"



import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { toast } from "@/components/ui/use-toast"


export default function Home({ mdxSource }: any) {
  const [showFinishDialog, setShowFinishDialog] = React.useState(false)

  return (
    <Layout>
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Criar</h2>
        </div>
        <Separator />

        <div className="container h-full py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[15%_50%_35%]">
            <div id="reference" className="flex-col h-full border rounded-md p-2 md:order-1 space-y-1 overflow-y-auto">
              <ReferenceItem title={"Lei orgânica 2161"} />
              <ReferenceItem title={"Lei orgânica 2161"} />
              <ReferenceItem title={"Lei orgânica 2161"} />
              <ReferenceItem title={"Lei orgânica 2161"} />
              <ReferenceItem title={"Lei orgânica 2161"} />
              <ReferenceItem title={"Lei orgânica 2161"} />
              <ReferenceItem title={"Lei orgânica 2161"} />
              <ReferenceItem title={"Lei orgânica 2161"} />
              <ReferenceItem title={"Lei orgânica 2161"} />
              <ReferenceItem title={"Lei orgânica 2161"} />
            </div>
            <div className="md:order-2">
              <div className="flex h-full flex-col space-y-4">
                <div className="bg-zinc-50 text-zinc-950 border rounded-md min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]">
                  Conteúdo
                </div>
              </div>
            </div>
            <div className="hidden flex-col space-y-4 sm:flex md:order-3">
              <div className="flex-col items-center space-y-2">
                <Label htmlFor="prompt" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Descrição</Label>
                <Textarea className="bg-zinc-50 text-zinc-950 flex-1 justify-between md:max-w-full" />
                <Button className="border border-sky-700 hover:border-sky-500 gap-2">
                  Enviar
                  <SendHorizontalIcon className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-2">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger asChild>
                    <span className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Configurações
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[320px] text-sm" side="left">
                    Escolha parâmetros, escreva o objeto, adicione informações e etc, de modo a melhorar o resultado final.
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="ml-auto flex w-full space-x-2 sm:justify-end">
                <PresetSelector presets={presets} />
              </div>
              <StyleSelector styletypes={styletypes} styles={styles} />
              <ModelSelector types={types} models={models} />
              <TemperatureSelector defaultValue={[1]} />
              <MaxLengthSelector defaultValue={[400]} />

              <div className="flex items-center space-x-2">

                <Button onClick={() => setShowFinishDialog(true)} className="border border-sky-700 hover:border-sky-500 gap-2">
                  Download e finalizar
                  <DownloadIcon className="h-4 w-4" />
                </Button>
                <AlertDialog open={showFinishDialog} onOpenChange={setShowFinishDialog}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Deseja finalizar esse documento?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Não é possível desfazer essa ação, você poderá fazer o download posteriormente mas não poderá mais voltar à editar esse documento.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <Button
                        variant="destructive"
                        onClick={() => {
                          setShowFinishDialog(false)
                          toast({
                            description: "Documento finalizado com sucesso.",
                          })
                        }}
                      >
                        Finalizar
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Layout>
  )
}