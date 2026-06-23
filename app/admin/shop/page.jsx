import Productcontainer from "@/components/admin/productadmincontainer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

import supabase from "@/supabase/supabase";
import { Plus } from "lucide-react";

export default async function Page({ }) {
    const { data, error } = await supabase.from("shop").select("*").order("created_at", { ascending: false });
    return (<main>
        <Navbar />
        <div className="mt-5" >         
            <Productcontainer data={data} />
        </div>
        <Button className={`fixed bottom-5 text-primary border-2 border-accent-foreground rounded-full bg-accent right-3 px-3 py-1 size-14`} size="icon" variant="default" >
            <Plus className="size-10" />
        </Button>
    </main>)
}