import * as React from "react"
import { ModeToggle } from "./modeToggle"
import { User } from "lucide-react"
import { UserNav } from "@/components/user/user-nav"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Header({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    return (
        <header className="border-b">
            <div className="flex h-16 items-center px-4">
                <div className="mx-6">
                    <nav
                        className={cn("flex items-center space-x-4 lg:space-x-6", className)}
                        {...props}
                    >
                        <div className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
                            <UserNav />
                            <Link
                                href="/"
                                className="text-base font-bold transition-colors hover:text-secondary"
                            >
                                Criar
                            </Link>
                            <Link
                                href="/archive"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
                            >
                                Arquivo
                            </Link>
                            <Link
                                href="/reference"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
                            >
                                Material de Apoio
                            </Link>
                        </div>
                        <div className="ml-auto flex items-center space-x-4">
                            <ModeToggle />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
