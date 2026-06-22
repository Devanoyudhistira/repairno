"use client"

import { ArrowLeft } from "lucide-react"
import Modetoggle from "./modetoggle"
import { Button } from "./ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"


export default function Navbar({ singlepage, addcontext }) {
    return (<nav className="w-full h-14 border-primary border-b-2 flex items-center justify-between px-3" >
        <h1 className="text-primary font-semibold text-xl" > {singlepage ?
            <span className="flex items-center gap-2" >
                 <Link href={"/shop"} > <Button size="icon" variant="ghost" >
                <ChevronLeft className="size-8" /> </Button>
                 </Link>  {addcontext} </span>
            :
            "Repair-no"}  </h1>
        <Modetoggle />
    </nav>)
}