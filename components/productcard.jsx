"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import convertToMoney from "@/function/convert"
import Dropdownshop from "./admin/dropdownshop"
import imageurl from "@/lib/imageurl"
import { useActionState, useEffect } from "react"
import { deleteitem } from "@/action/shopcrud"
import { toast } from "sonner"

export default function Productcard({ image, productname, harga, admin, id, stock }) {
    const [state, deleteaction, pending] = useActionState(deleteitem.bind(null, id), "dsss")    
    return <>
        <Card size="md" className={`border-0 m-0 h-70 lg:h-80 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ring-0 p-0 gap-0 bg-transparent`} >
            <div className={`rounded-xl self-center flex justify-center overflow-hidden w-max h-max `} >
                <Image className="w-[90%] lg:w-80 h-full rounded-xl  mt-2 object-center object-cover aspect-square" src={imageurl(image)} alt="productname" width={700} height={700} />
            </div>
            <CardContent className={`px-0 py-1 m-0 flex  h-full flex-col justify-between `} >
                <CardHeader className={`flex px-1.5 gap-0 flex-col `} >
                    <CardTitle className={`text-primary text-md font-semibold`} > {productname}  </CardTitle>
                    <h1 className="text-secondary font-mono font-medium text-xl" > {convertToMoney(harga)} </h1>
                    <h6 className="text-md font-mormal text-primary" > stock: <span className="text-secondary" > {stock} </span> </h6>
                </CardHeader>
                <CardFooter className={`w-full px-2 flex-col items-center justify-center`} >
                    {admin ? <Dropdownshop deleteaction={deleteaction} initialstock={stock} initialname={productname} initialprice={harga} id={id} />
                        : <Link href={`/shop/${id}`} className="self-end w-full" > <Button size="lg" variant="secondary" className={`w-full text-md font-semibold`} > Lihat barang </Button> </Link>}
                </CardFooter>
            </CardContent>
        </Card>
    </>
}