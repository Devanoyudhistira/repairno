"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"

export default function Deletecheckout({id}) {
    const router = useRouter()
    async function deletecart() {
        const wishrequest = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/checkout`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
            }),
        })
        const response = await wishrequest.json()
        if (response.success) {
            router.refresh()
            return response
        }
        router.refresh()
        return response
    }
    return <Button onClick={() => toast.promise(deletecart, { position: "top-center", loading: "Loading...", success: (response) => response.message, error: "gagal silahkan coba lagi" })} size="icon-sm" variant="outline" > <Trash2 /> </Button>
}