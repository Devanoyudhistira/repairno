"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { Wrench } from "lucide-react"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Heart } from "lucide-react"

export default function Footnav() {
    const pathnow = usePathname()   
    const isshop = pathnow.split("/")    
    return !isshop.includes("login") && !isshop.includes("admin")  && <footer className="fixed mt-20 bottom-0 left-0 gap-0 flex w-full bg-primary-foreground h-13" >
        <Link href={"/shop"} className="w-[50%] h-full" >
            <Button size="xl" variant={isshop.includes("shop") ? `secondary` : "link"} className={`w-full m-0 h-full p-0 flex items-center justify-center ${isshop.includes("shop") ? "text-accent" : "text-primary"}`} >
                <ShoppingCart size={50} className="size-7" />
            </Button>
        </Link>
        <Link href={"/wishlist"} className="w-[50%] h-full" >
            <Button size="xl " variant={isshop.includes("wishlist") ? `secondary` : "link"} className={`w-full p-0 m-0 h-full flex items-center justify-center ${!isshop.includes("wishlist") ? "text-accent" : "text-primary"}`} >
                <Heart className="size-7" />
            </Button>
        </Link>
        <Link href={"/checkout"} className="w-[50%] h-full" >
            <Button size="xl " variant={isshop.includes("checkout") ? `secondary` : "link"} className={`w-full p-0 m-0 h-full flex items-center justify-center ${isshop.includes("checkout") ? "text-accent" : "text-primary"}`} >
                <ShoppingBag className="size-7" />
            </Button>
        </Link>
    </footer>
}