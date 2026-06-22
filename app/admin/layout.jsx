import { createClient } from "@/supabase/server"
import { redirect } from "next/navigation"

export default async function Layout({children}){   
    const supabasauth = await createClient()

    const {data,error} = await supabasauth.auth.getSession()
    
    if(!data.session){
        redirect("/")
    }

    return(<div className="bg-primary-foreground" >
        {children}
    </div>)
}