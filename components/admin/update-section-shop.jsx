import { Pencil } from "lucide-react";
import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Pen } from "lucide-react";
import { DollarSign } from "lucide-react";
import { DollarSignIcon } from "lucide-react";

export default function Updatesectionshop({ setopenrestock,setopenrename,setopenpricing }) {
    return <DropdownMenuSub>
        <DropdownMenuSubTrigger >
             <Pencil /> <span> update barang</span> 
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
            <DropdownMenuSubContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setopenrestock(true)} >
                        <span className="flex items-center gap-1" > <Pen />  ubah stock </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setopenrename(true)} >
                        <span className="flex items-center gap-1" > <Pencil />  ubah nama  </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setopenpricing(true)} >
                        <span className="flex items-center gap-1" > <DollarSignIcon />  ubah harga  </span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuSubContent>
        </DropdownMenuPortal>
    </DropdownMenuSub>
}