import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Eye } from "lucide-react";
import { Delete } from "lucide-react";
import { Pencil } from "lucide-react";
import { TrashIcon } from "lucide-react";

export default function Dropdownshop({ }) {
    return <DropdownMenu>
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
            <DropdownMenuItem variant="destructive" >
                <TrashIcon /> <span> hapus barang </span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}