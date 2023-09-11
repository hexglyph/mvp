import * as React from "react"

import {
    ChevronDownIcon,
    CircleIcon,
    PlusIcon,
    StarIcon,
    TrashIcon,
} from "@radix-ui/react-icons"

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { toast } from "@/components/ui/use-toast"

interface ReferenceItemProps {
    title: string;
}

export const ReferenceItem: React.FC<ReferenceItemProps> = ({ title }) => {
    const [showDeleteDialog, setShowDeleteDialog] = React.useState(false)

    return (
        <Card>
            <CardHeader className="grid items-center p-2">
                <div className="flex items-center gap-2">
                    <CardTitle className="text-sm w-full">
                        {title}
                    </CardTitle>
                    <Button onClick={() => setShowDeleteDialog(true)} variant="destructive" className="font-sm p-1 shadow-none">
                        <TrashIcon className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Deseja excluir esse item?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Não é possível desfazer essa ação, ele não será mais utilizado e será necessário reenviar o arquivo caso desejado.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <Button
                            variant="destructive"
                            onClick={() => {
                                setShowDeleteDialog(false)
                                toast({
                                    description: "Material excluído com sucesso.",
                                })
                            }}
                        >
                            Excluir
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Card>
    )
}