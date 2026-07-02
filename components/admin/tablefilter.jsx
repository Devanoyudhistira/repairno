import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { SortAscIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Select } from "../ui/select";
import Selectsort from "./selectsort";

export default function Tablefilter({dateparam,ascparam}) {
    
    return <ButtonGroup>
        <Button variant="outline" size="icon" >
            <Filter />
        </Button>
        <DropdownMenu >
            <Button variant="outline" size="icon" >
                <DropdownMenuTrigger asChild >
                    <Button variant="ghost" size="icon" >
                        <SortAscIcon />
                    </Button>
                </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent className={`w-100`} >
                <DropdownMenuLabel  > urutkan sesuai </DropdownMenuLabel>
                <DropdownMenuItem  className={`w-full`} >
                    <Selectsort currentasc={ascparam} currentdate={dateparam} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </ButtonGroup>
}