"use client"
import convertToMoney from "@/function/convert";
import Buyitem from "./buy-item";
import Detatiledlist from "./detailedlist";
import Paymentoption from "./payment-option";
import { Card, CardAction, CardContent, CardDescription, CardHeader } from "./ui/card";
import { RadioGroup } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function Itemdetailcomponent({ data, variantdata, defaultname, categories, specdata, checkouted }) {
    console.log(checkouted)
    const router = useRouter()
    console.log()
    const [variant, setvariant] = useState(defaultname)
    console.log(variant)
    const totalvariant = variant.reduce((total, item) => {
        return total + item.price;
    }, 0);

    async function addtocart() {
        if (!checkouted) {
            const cartrequest = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: data.id,
                    variant:variant.map(e => e.id)
                }),
            })
            const response = await cartrequest.json()
            if (response.success) {
                router.refresh()
                return response
            }
        }
        else {
            const wishrequest = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/checkout`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: data.id,
                }),
            })
            const response = await wishrequest.json()
            if (response.success) {
                setwishlistmessage(response.message)
                setiswishlist(false)
                router.refresh()
                return response
            }
        }
    }

    const totalprice = totalvariant + data.price

    return <Card className={`p-2 lg:ml-0 mr-3   min-h-130 max-h-max lg:min-h-max justify-between bg-transparent border-transparent border-0 border-none mt-2 w-[92%] lg:w-[70%] `} >
        <div className="flex flex-col gap-4 " >
            <CardHeader className={`w-full font-semibold border-transparent border-none border-0 text-xl p-0 flex justify-between`} >
                <h1> {data.name} </h1>
            </CardHeader>
            <CardDescription className={`text-primary font-medium text-[17px]`} >
                {data.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores illum adipisci officia! Facilis nam similique recusandae odio possimus asperiores quos.
            </CardDescription>
            <Separator />
            <h1 className="text-2xl ml-4 font-bold" > {convertToMoney(totalprice)} </h1>
            <Separator />
            <CardContent className={`p-2 w-full`} >
                <h1 className="text-primary text-2xl font-semibold capitalize" > spesifikasi product </h1>
                <ul className="w-full px-2 text-md flex flex-col gap-3 mt-8 " >
                    {specdata.map(e =>
                        <Detatiledlist value={e?.value} category={e?.name} key={e?.id} />
                    )}
                </ul>
            </CardContent>
            <div>
                {categories.map((c, i) => (
                    <RadioGroup
                        key={c}
                        name="variant"
                        defaultValue={defaultname[i]?.id}
                        className="grid grid-cols-4 gap-2 items-center">
                        <h1 className="text-xl font-semibold col-span-4">
                            {c}
                        </h1>
                        {variantdata
                            .filter(
                                e =>
                                    e.variant_category
                                        .trim()
                                        .toLowerCase() === c
                            )
                            .map(e => (
                                <Paymentoption
                                    key={e.id}
                                    category={c}
                                    setSelect={setvariant}
                                    select={variant}
                                    id={e.id}
                                    title={e.name}
                                    value={e.id}
                                    description=""
                                    price={e.variant_price}
                                />
                            ))}
                    </RadioGroup>
                ))}
            </div>
        </div>
        <CardAction className={`p-0 w-full`} >
            {/* <Buyitem allprice={totalprice} data={data} variant={variant} id={data?.id} /> */}
            <Button onClick={() => toast.promise(addtocart(), { position: "top-center", loading: "Loading...", success: (response) => response.message, error: "gagal silahkan coba lagi" })} className={`w-full text-xl h-14 font-semibold text-secondary mt-2`} size="lg" variant="default"  >
                {!checkouted ?
                    <> add to cart <ShoppingCart className="size-6" /> </> :
                    <> delete from cart <Trash2 className="size-6" /> </>}
            </Button>
        </CardAction>
    </Card>
}