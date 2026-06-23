"use server"

import supabase from "@/supabase/supabase";
import { revalidatePath } from "next/cache";

export async function updatestatus( id,status,prevState,formData){
    const {data,error} = await supabase.from("repaired-item").update({
        status:status
    }).eq("id",id) .select("*").single()

    console.log(data)        
    revalidatePath("/admin/repair")
}