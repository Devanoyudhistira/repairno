"use server"

import supabase from "@/supabase/supabase";
import { revalidatePath } from "next/cache";

export async function updatestatus( id,status,prevState,formData){
    const {data,error} = await supabase.from("service-list").update({
        status:status
    }).eq("id",id) .select("*").single()

    console.log(id)        
    revalidatePath("/admin/repair")
}