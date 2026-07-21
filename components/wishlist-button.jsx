"use client"

import { Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export default function Wishlistbutton({ handle, wishlisht ,id,setiswishlist}) {
    const [isloading, setloading] = useState(false)
    const router = useRouter()
    console.log("Dadad")
    console.log(isloading)
    const bodydata = JSON.stringify({ id: id })
    async function addwishlist() { 
        setloading(true)       
        if (!wishlisht) {
            const wishrequest = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/wishlist`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: bodydata
            })
            const response = await wishrequest.json()
            if (response.success) {                
                setiswishlist(true)
                router.refresh()
                setloading(false)
                return response
            }
            setloading(false)
        }
        else {
            const wishrequest = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/wishlist`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body:bodydata,
            })
            const response = await wishrequest.json()
            if (response.success) {            
                router.refresh()
                setiswishlist(false)
                setloading(false)
                return response
            }
            setloading(false)
        }
    }
    return <button disabled={isloading} onClick={() => toast.promise(addwishlist(), { position: "top-center", loading: "loading..", success: (response) => response.message, error: "gagal silahkan coba lagi" })}
        className="absolute top-2 left-3" >
        <Heart className={`text-red-700 size-8 transition ${wishlisht && 'fill-red-700'} `} />
    </button>
}