import Sidebarnav from "@/components/admin/sidebarnav"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { createClient } from "@/supabase/server"
import { redirect } from "next/navigation"

export default async function Layout({ children }) {
    const supabasauth = await createClient()

    const { data, error } = await supabasauth.auth.getSession()

    if (!data.session) {
        redirect("/")
    }

    return (
        <>
            <div className="w-screen lg:flex items-center gap-3" >
                <Sidebarnav />
                <div className="col-span-2 w-full px-2 lg:px-0 lg:w-[90%]" >
                    <SidebarTrigger />
                    {children}
                </div>
            </div>
        </>
    )
}