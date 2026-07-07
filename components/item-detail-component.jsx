"use client"
import convertToMoney from "@/function/convert";
import Buyitem from "./buy-item";
import Detatiledlist from "./detailedlist";
import Paymentoption from "./payment-option";
import { Card, CardAction, CardContent, CardDescription, CardHeader } from "./ui/card";
import { RadioGroup } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { useState } from "react";

export default function Itemdetailcomponent({ data, variantdata, defaultname, categories, specdata }) {

    const [variant, setvariant] = useState(defaultname)
    console.log(variant)

    return <Card className={`p-2 lg:ml-0 mr-3   min-h-130 max-h-max lg:min-h-max justify-between bg-transparent border-transparent border-0 border-none mt-2 w-[92%] lg:w-[70%] `} >
        <div className="flex flex-col gap-4 " >
            <CardHeader className={`w-full font-semibold border-transparent border-none border-0 text-xl p-0 flex justify-between`} >
                <h1> {data.name} </h1>
            </CardHeader>
            <CardDescription className={`text-primary font-medium text-[17px]`} >
                {data.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores illum adipisci officia! Facilis nam similique recusandae odio possimus asperiores quos.
            </CardDescription>
            <Separator />
            <h1 className="text-2xl ml-4 font-bold" > {convertToMoney(data.price)} </h1>
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
                                />
                            ))}
                    </RadioGroup>
                ))}
            </div>
        </div>
        <CardAction className={`p-0 w-full`} >
            <Buyitem variant={variant} id={data?.id} />
        </CardAction>
    </Card>
}