"use client"

import { useActionState, useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldTitle } from "./ui/field"
import { RadioGroupItem, RadioGroup } from "./ui/radio-group"
import { Input } from "./ui/input"
import Paymentmethod from "./paymentmethod"
import Paymentinfo from "./payment-info"
import { purchase } from "@/action/purchaseaction"
import { Spinner } from "./ui/spinner"
import { toast } from "sonner"
import Paymentoption from "./payment-option"
import { Card, CardContent, CardDescription } from "./ui/card"
import Image from "next/image"
import imageurl from "@/lib/imageurl"
import convertToMoney from "@/function/convert"
import { Dot } from "lucide-react"

export default function Buyitem({ id, variant, data,allprice }) {
    const [confirmbuy, setconfirmbuy] = useState(false)
    const [state, payaction, pending] = useActionState(purchase.bind(null, id, variant), null)
    const [vainfo, setvainfo] = useState(false)
    useEffect(() => {
        if (state) {
            setvainfo(true)
            setconfirmbuy(false)
        }
    }, [setvainfo, setconfirmbuy, state])
    return (
        <>
            <Button onClick={() => setconfirmbuy(true)} variant="secondary" className={`text-primary bg-secondary w-full py-4 h-14 flex font-semibold text-xl`} size="lg"  >  Beli sekarang </Button>
            <Dialog onOpenChange={setconfirmbuy} open={confirmbuy} >
                <DialogContent showCloseButton={false} >
                    <Card className={`px-1 py-2`} >
                        <CardContent className={`flex p-1 flex-row gap-4 items-center`} >
                            <Image src={imageurl(data.gambar)} alt={data.name} width={100} height={100} className="w-20 h-20 object-cover object-center rounded-xl " />
                            <CardDescription>
                                <h1 className="" > {data.name} </h1>
                                <div className="flex items-center gap-2" >
                                    {variant.map(e =>
                                        <span className="flex text-xs items-center gap-1" key={e.id} > {e.category}: {e.name} </span>
                                    )}
                                </div>
                                <h2 className="text-secondary" > {convertToMoney(allprice)} </h2>
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <DialogHeader>
                        <DialogTitle className={`text-xl`} > tolong masukan identitas anda  </DialogTitle>
                    </DialogHeader>
                    <form action={payaction}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel> nama anda </FieldLabel>
                                <Input className={"invalid:border-destructive invalid:ring-2 invalid:ring-destructive invalid:outline-none  "} required name="customer-name" type={"text"} />
                                <FieldLabel> email anda </FieldLabel>
                                <Input className={"invalid:border-destructive invalid:ring-2 invalid:ring-destructive invalid:outline-none  "} required name="customer-email" type={"email"} />
                                <FieldLabel> tolong masukan nomer yang masih aktif </FieldLabel>
                                <Input className={"invalid:border-destructive invalid:ring-2 invalid:ring-destructive invalid:outline-none  "} required name="customer-phone" type={"number"} />
                            </Field>
                            <FieldLabel> Pilih metode pembayaran anda </FieldLabel>
                            <Paymentmethod />
                            <FieldSeparator className={"-mb-6 -mt-4"} />
                            <div className="w-full  items-center flex justify-center gap-2" >
                                <Button type="submit" size="lg" className={`rounded-xl ${pending ? "w-full" : "w-1/2"} `} disable={pending} variant={pending ? "outline" : "success"} > {pending ? <span className="flex items-center gap-2" > <Spinner /> Loading </span> : "Confirm"} </Button>
                                {!pending && <Button type="button" onClick={() => setconfirmbuy(false)} size="lg" className={`w-1/2`} variant="destructive" > cancel </Button>}
                            </div>
                        </FieldGroup>
                    </form>
                </DialogContent>
            </Dialog>
            <Paymentinfo setcondition={setvainfo} condition={vainfo} vanumber={state?.va_numbers[0]?.va_number} />
        </>
    )
} 