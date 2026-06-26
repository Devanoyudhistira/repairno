"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { EllipsisVertical } from "lucide-react"
import { TrashIcon } from "lucide-react"
import { Eye } from "lucide-react"
import Link from "next/link"
import { useActionState, useState } from "react"
import Dropdownform from "./dropdownform"
import Deletealert from "./deletealert"
import { deleterepair } from "@/action/repaircrud"


export default function Dropdownmenurepair({ statusupdate, id }) {
    const [deletealert,setdeletealert] = useState(false)
    const [state,action,pending] = useActionState(deleterepair.bind(null,id),null)
    return <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button size="icon" variant="outline" > <EllipsisVertical /> </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        Change status
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>
                                    ubah status servisan
                                </DropdownMenuLabel>
                                <Dropdownform statusupdate={statusupdate} iditem={id} text={"selesai"} color={"success"} status={"success"} />
                                <Dropdownform statusupdate={statusupdate} iditem={id} text={"proses"} color={"warning"} status={"prosess"} />
                                <Dropdownform statusupdate={statusupdate} iditem={id} text={"error"} color={"destructive"} status={"error"} />
                            </DropdownMenuGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem onClick={""} variant="link" >
                    <Link href={"/"} className="flex items-center gap-2" > <Eye /> lihat barang  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={ () => setdeletealert(true)} variant="destructive" >
                    <TrashIcon /> delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <Deletealert deleteaction={action} opencondition={deletealert} setopencondition={setdeletealert} id={id} deskripsi={`tindakan ini akan menghapus project perbaikan anda, anda yakin ?.`} title={"hapus project ?"} />
    </>
}