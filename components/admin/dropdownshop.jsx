"use client"
import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Eye } from "lucide-react";
import { Delete } from "lucide-react";
import { Pencil } from "lucide-react";
import { TrashIcon } from "lucide-react";
import Drawerstock from "./drawerstock";
import { DrawerTrigger } from "../ui/drawer";
import { useState } from "react";
import { Pen } from "lucide-react";

export default function Dropdownshop({id,initialstock}) {
    const [openrestock, setopenrestock] = useState(false)
    const [newstock, setnewstock] = useState(initialstock)
    return <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button size="icon" variant="link" > <Ellipsis /> </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Eye /> <span> lihat barang</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Pencil /> <span> update barang</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setopenrestock(true)} >
                    <span className="flex items-center gap-1" > <Pen />  ubah stock </span>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive" >
                    <TrashIcon /> <span> hapus barang </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <Drawerstock id={id} newstock={newstock} setnewstock={setnewstock} condition={openrestock} setcondition={setopenrestock} />
    </>
}