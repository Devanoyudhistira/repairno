import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import Checkoutitem from "./checkout-item";
import supabase from "@/supabase/supabase";

export default async function Variantinfo({name,image,variantdata}) {
    const {data,error} = await supabase.from("variant").select("name,variant_category").in("id",variantdata)
    return <Checkoutitem itemname={name} image={image} allvariant={data} />        
}