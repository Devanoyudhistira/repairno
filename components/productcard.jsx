"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import convertToMoney from "@/function/convert"
import Dropdownshop from "./admin/dropdownshop"
import imageurl from "@/lib/imageurl"
import { useActionState } from "react"
import { deleteitem } from "@/action/shopcrud"

export default function Productcard({ image, productname, harga, admin, id, stock }) {
    const [state, deleteaction, pending] = useActionState(deleteitem.bind(null, id), null)
    return <>
        <Card size="md" className={`border-0 m-0 h-70 lg:h-90 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ring-0 p-0 gap-0 bg-primary-foreground`} >
            <div className={`rounded-xl self-center overflow-hidden w-max h-max `} >
                <Image className="w-40 lg:w-80 h-full  mt-1 object-center object-cover aspect-square" src={imageurl(image)} alt="productname" width={700} height={700} />
            </div>
            <CardContent className={`px-0 py-1 m-0 flex  h-full flex-col justify-between `} >
                <CardHeader className={`flex px-1.5 flex-col `} >
                    <CardTitle className={`text-primary text-md font-semibold`} > {productname}  </CardTitle>
                    <h1 className="text-secondary font-mono font-medium text-xl" > {convertToMoney(harga)} </h1>
                </CardHeader>                
                <CardFooter className={`w-full px-2 flex items-center justify-between`} >
                    <h6 className="text-md font-mormal text-primary" > stock:{stock} </h6>
                    {admin ? <Dropdownshop deleteaction={deleteaction} initialstock={stock} initialname={productname} initialprice={harga} id={id} />
                        : <Link href={`/shop/${id}`} className="self-end" > <Button size="icon" variant="outline" className={`border-secondary`} > <ArrowUpRight /> </Button> </Link>}
                </CardFooter>
            </CardContent>
        </Card>
    </>
}