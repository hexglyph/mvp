import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Archive from "@/components/archive"
import Layout from "@/components/layout"

interface ArchiveProps {
    children: React.ReactNode
}

export default function ArchivePage({ children }: ArchiveProps) {
    return (
        <Layout>
            <div className="hidden h-full flex-col md:flex">
                <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
                    <h2 className="text-lg font-semibold">Arquivo</h2>
                </div>
                <Separator />
                <div className="container h-full py-6">
                    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
                        <Archive />
                    </div>
                </div>
            </div>
        </Layout>
    )
}