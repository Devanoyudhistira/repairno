"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { Wrench } from "lucide-react"
import { usePathname } from 'next/navigation'
import Link from "next/link"

export default function Footnav() {
    const pathnow = usePathname()   
    const isshop = pathnow.split("/")
    console.log(isshop.includes("shop") )
    return <footer className="fixed bottom-0 left-0 gap-0 flex w-full bg-primary-foreground h-13" >
        <Link href={"/shop"} className="w-[50%] h-full" >
            <Button size="xl" variant={isshop.includes("shop") ? `secondary` : "link"} className={`w-full m-0 h-full p-0 flex items-center justify-center`} >
                <ShoppingCart size={50} className="size-7" />
            </Button>
        </Link>
        <Link href={"/"} className="w-[50%] h-full" >
            <Button size="xl " variant={isshop.includes("shop") ? `link` : "secondary"} className={`w-full p-0 m-0 h-full flex items-center justify-center`} >
                <Wrench className="size-7" />
            </Button>
        </Link>
    </footer>
}