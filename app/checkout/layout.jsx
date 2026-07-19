import { createClient } from "@/supabase/server";
import supabase from "@/supabase/supabase";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";


export default async function Layout({ children }) {    
    const supabaseauth = await createClient()
    const {data: { user },} = await supabaseauth.auth.getUser()
    const { data: userdata, error: usererror } = await supabase.from("users_list").select("id,account_id").eq("account_id", user?.id).single()
    if (!userdata?.id) {
        return redirect(`/sign-up`);
    }
    return <div className="min-h-full w-screen" >
        {children}
    </div>
}