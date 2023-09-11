import path from "path"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { archiveSchema } from "./schema"
import Layout from "../layout"



export default function Archive() {
    let data = [
        {
            "id": "file-8782",
            "title": "Justificativa técnica para aquisição de equipamentos de informática",
            "status": "finished",
            "label": "justificativa-tecnica"
        },
        {
            "id": "file-7878",
            "title": "Contrato de prestação de serviços de manutenção de equipamentos de informática",
            "status": "in progress",
            "label": "contrato"
        }
    ]

    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-2 md:flex">
                <div className="flex items-center justify-between space-y-2">
                </div>

                <DataTable data={data} columns={columns} />


            </div>
        </>
    )
}