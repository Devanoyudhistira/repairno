import { Pencil, Pen, DollarSignIcon } from "lucide-react";
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";

export default function Updatesectionshop({
    setopenrestock,
    setopenrename,
    setopenpricing
}) {
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <Pencil />
                <span>Update item</span>
            </DropdownMenuSubTrigger>

            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            onClick={() => setopenrestock(true)}
                        >
                            <span className="flex items-center gap-1">
                                <Pen />
                                Update stock
                            </span>
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => setopenrename(true)}
                        >
                            <span className="flex items-center gap-1">
                                <Pencil />
                                Rename item
                            </span>
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => setopenpricing(true)}
                        >
                            <span className="flex items-center gap-1">
                                <DollarSignIcon />
                                Update price
                            </span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
    );
}