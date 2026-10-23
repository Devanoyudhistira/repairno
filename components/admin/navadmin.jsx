"use client"

import { Ellipse } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Link from "next/link"
import Modetoggle from "../modetoggle"
import { Shield } from "lucide-react"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

export default function Navadmin({imageprofile,profileimage}) {
    return <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant="icon" size="icon-lg" >
                <div className="w-8 h-8 mr-2 rounded-full overflow-hidden border" > <Image src={profileimage} height={300} width={300} alt="user-profile" /> </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem  >
                <Link className={"flex-row flex items-center gap-1 w-max"} href={"/admin"} > <Shield /> admin page </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Modetoggle />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}