import Productcontainer from "@/components/admin/productadmincontainer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

import supabase from "@/supabase/supabase";
import { Plus } from "lucide-react";

export default async function Page({ }) {
    const { data, error } = await supabase.from("shop").select("*").order("created_at", { ascending: false });
    return (<main className="w-full" >     
    <Toaster/>   
        <div className="mt-5" >         
            <Productcontainer data={data} />
        </div>        
    </main>)
}