"use client"
import { Card, CardAction, CardContent, CardHeader } from "./ui/card";
import Paymentradio from "./paymentradio";
import { Button } from "./ui/button";
import { bulkpayment } from "@/action/purchaseaction";
import { useActionState } from "react";
import { Separator } from "./ui/separator";

export default function Pricedefault({itemarray,variantarray,price,itemprice,itemaname}) {
    const [state,buyaction,pending] = useActionState(bulkpayment.bind(null,itemarray,variantarray,price,itemprice,itemaname),null)
    return <Card className={"h-max "} >
        <CardHeader className={`text-md lg:text-lg font-semibold`} > payment method </CardHeader>
        <Separator />
        <CardContent>
            <Paymentradio />
        </CardContent>
        <CardAction className={"w-full px-3"} >
            <form action={buyaction} className="w-full" >
                <Button size="lg" variant="default" className={"w-full text-xl font-medium"} > Confirm </Button>
            </form>
        </CardAction>
    </Card>
}