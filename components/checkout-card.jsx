import convertToMoney from "@/function/convert"
import supabase from "@/supabase/supabase"
import Image from "next/image"
import { ButtonGroup } from "./ui/button-group"
import { InputGroupAddon } from "./ui/input-group"
import { Delete } from "lucide-react"
import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"
import Deletecheckout from "./deletecheckout"

export default async function Checkoutcard({ price, variant_id, name, gambar ,id }) {    
    const { data: variant, error: varianterror } = await supabase.from("variant").select("*").in("id", variant_id)
    return <div className="flex items-top gap-2 pb-4 justify-between items-center px-3" >
        <div className="flex gap-2 items-center" >
            <Image src={gambar} alt="image" width={200} height={200} className="object-cover object-center w-22 h-22 aspect-square " />
            <div>
                <h1 className="text-lg font-medium" > {name} </h1>
                <ul className="text-xs font-normal" >
                    {variant.map(e =>
                        <li key={e?.id} > {e?.name} </li>
                    )
                    }
                </ul>
                <Deletecheckout id={id}/>
            </div>
        </div>
        <h1 className="text-secondary text-xl font-semibold" > {convertToMoney(price)} </h1>
    </div>
}