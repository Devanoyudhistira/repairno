import Image from "next/image";
import { Card, CardAction, CardContent, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Checkoutitem from "./checkout-item";

export default async function Historycard({ }) {
    return <Card className={`py-0 p-0 h-max`} >
        <CardContent className={`flex items-center px-2 py-2 justify-between`} >
            <div className="flex items-center gap-2" >
                <h1 className="bg-success/10 text-success focus-visible:ring-success/20 dark:bg-success/20 dark:focus-visible:ring-success/40 [a]:hover:bg-success/20 p-2 rounded-full" > <ShoppingCart className={`size-4 lg:size-4`} /></h1>
                <h1 className="font-semibold text-md capitalize" > laptop | Hp | casing </h1>
            </div>
            <h1 className="text-secondary font-bold text-xl" >
                Rp.1.900.000
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
                    <Checkoutitem />
                </CollapsibleContent>
            </Collapsible>
        </CardAction>
    </Card>
}