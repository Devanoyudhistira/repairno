"use client"

import { Pen } from "lucide-react"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer"
import { useActionState, useEffect } from "react"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { Minus } from "lucide-react"
import { restock } from "@/action/shopcrud"
import { Spinner } from "../ui/spinner"
export default function Drawerstock({ condition, setcondition, newstock, setnewstock, id }) {
    const [state, stockchange, pending] = useActionState(restock.bind(null, id, newstock), null)
    useEffect(() => {
        if (state?.success) {
            const timer = setTimeout(() => {
                setcondition(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [state, setcondition]);
    return <Drawer open={condition} onOpenChange={setcondition} >
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle> Ubah stock </DrawerTitle>
                <DrawerDescription> tambah atau kurangi jumlah stock yang tersisa dari barang ini </DrawerDescription>
            </DrawerHeader>
            <form action={stockchange} className="w-full bg-primary-foreground h-60 gap-5 items-center flex flex-col" >
                <div className="w-full flex items-center text-4xl font-semibold gap-20 justify-center" >
                    <Button type="button" className={`w-14 h-14`} onClick={() => setnewstock(newstock - 1)} size="icon" variant="outline" > <Minus className={`size-10`} /> </Button>
                    <h1> {newstock} </h1>
                    <Button type="button" className={`w-14 h-14`} onClick={() => setnewstock(newstock + 1)} size="icon" variant="outline" > <Plus className={`size-10`} /> </Button>
                </div>
                {state?.success && <h1 className="text-2xl animate-in font-semibold text-success px-2 py-1 bg-success/10" > {state?.message} </h1>}
                {state?.error && <h1 className="text-xl animate-in font-semibold text-destructive px-2 py-1 bg-destructive/10 " > {state?.message} </h1>}
                <Button type="submit" className={`w-70 text-xl py-2`} size="lg" variant="default" > {pending ? <span className="flex items-center gap-1" > <Spinner /> Loading </span> : "Rubah"} </Button>
            </form>
        </DrawerContent>
    </Drawer>
}