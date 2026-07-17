"use server"

import userid from "@/lib/userid"
import { createClient } from "@/supabase/server"
import supabase from "@/supabase/supabase"

export async function POST(request){
    const user = await userid()
    const body = await request.json()
    const {id} = body
    const {data,error} = await supabase.from("checkout").insert({item:id,user:user})    
}