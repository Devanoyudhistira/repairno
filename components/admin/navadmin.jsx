"use client"

import { Ellipse } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Link from "next/link"
import Modetoggle from "../modetoggle"
import { Shield } from "lucide-react"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"

export default function Navadmin(){
    return <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant="icon" size="icon-lg" >
                <Menu/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem  >
                <Link className={"flex-row flex items-center gap-1 w-max"} href={"/admin"} > <Shield/> admin page </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Modetoggle/>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}