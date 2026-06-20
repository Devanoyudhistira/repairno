"use client"

import { ArrowLeft } from "lucide-react"
import Modetoggle from "./modetoggle"
import { Button } from "./ui/button"
import Link from "next/link"


export default function Navbarback({backtarget}) {
    return (<nav className="w-full h-14 border-primary border-b-2 flex items-center justify-between px-3" >
        <div className="text-primary flex items-center gap-2 font-semibold text-xl" >
            <Link href={backtarget} >
                <Button size="icon" variant="ghost" > <ArrowLeft /> </Button>
            </Link>
            <h1> Repair-no  </h1>
        </div>
        <Modetoggle />
    </nav>)
}