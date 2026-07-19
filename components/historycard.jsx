import Image from "next/image";
import { Card, CardAction, CardContent, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Checkoutitem from "./checkout-item";
import supabase from "@/supabase/supabase";
import convertToMoney from "@/function/convert";
import Variantinfo from "./variant-info";
import imageurl from "@/lib/imageurl";

export default async function Historycard({ orderid }) {
    // console.log(orderid)
    const { data, error } = await supabase.from("order_checkout").select("*,item_id(*)").eq("order_id", orderid)
    console.log(data)
    const totalprice = data.reduce((total, item) => { return total + item.price; }, 0);
    const allname = data.map(e => e.item_id.name)
    console.log(allname.join(" | "))
    return <Card className={`py-0 p-0 h-max`} >
        <CardContent className={`flex items-center px-2 py-2 justify-between`} >
            <div className="flex items-center gap-2" >
                <h1 className="bg-success/10 text-success focus-visible:ring-success/20 dark:bg-success/20 dark:focus-visible:ring-success/40 [a]:hover:bg-success/20 p-2 rounded-full" > <ShoppingCart className={`size-4 lg:size-4`} /></h1>
                <h1 className="font-semibold text-md capitalize" > {allname.join(" | ")} </h1>
            </div>
            <h1 className="text-secondary font-bold text-xl" >
                {convertToMoney(totalprice)}
            </h1>
        </CardContent>
        <CardAction className={"w-full ml-3 self-end justify-self-end"} >
            <Collapsible className="w-full " >
                <CollapsibleTrigger className="self-end" asChild >
                    <Button variant="ghost" size="icon" className="size-8">
                        <ChevronDown className="group-data-[state=open]:rotate-180" />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className={`p-2 w-full`} >
                    {data.map(e =>
                        <Variantinfo image={imageurl(`${e.item_id.gambar}`)} variantdata={e.variant_order} key={e.id} name={e.item_id.name} />
                    )}
                </CollapsibleContent>
            </Collapsible>
        </CardAction>
    </Card>
}