"use server"

import supabase from "@/supabase/supabase"
import { revalidatePath } from "next/cache"

export async function restock(id,jumlah,prev,formdata,...args){    
    console.log(jumlah)
    // console.log(id)
    // console.log(args)
    const {error} = await supabase.from("shop").update({ stock:jumlah }).eq("id",id)
    if(error){
        return {error:true,message:"perubahan gagal"}
    }
    revalidatePath("/admin/shop")
    return {success:true,message:"perubahan berhasil"}
}
export async function updatename(id,prev,formdata){
    const newname = formdata.get("newname")
    const {error} = await supabase.from("shop").update({name:newname}).eq("id",id)
}
export async function updateprice(id,prev,formdata){
    const newprice = formdata.get("newprice")
    const {error} = await supabase.from("shop").update({price:newprice}).eq("id",id)
}