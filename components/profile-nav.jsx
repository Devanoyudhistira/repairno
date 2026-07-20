"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import Modetoggle from "./modetoggle"
import imageurl from "@/lib/imageurl"
import { signout } from "@/action/auth"

export default function Profilenav({ profileimage }) {
    return <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant="icon" size="icon-lg" >
                <Image src={imageurl(`/profile/${profileimage}`)} className="w-10 h-10 mr-3 rounded-full object-center object-cover" alt={profileimage} width={100} height={100} />  :
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem  >
                <form action={signout} >
                    <button type="submit" className="text-destructive capitalize font-medium" > Log Out </button>
                </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Modetoggle />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}