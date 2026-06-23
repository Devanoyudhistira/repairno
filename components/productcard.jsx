"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowBigLeft } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import convertToMoney from "@/function/convert"
import Dropdownshop from "./admin/dropdownshop"

export default function Productcard({ image, productname, harga, admin, id,stock }) {
    return <Card size="md" className={`border-primary m-0 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border p-1 gap-0 bg-primary-foreground`} >
        <Image className="w-full h-40 mt-1 object-center object-cover" src={"/image/" + image} alt="productname" width={700} height={700} />
        <CardContent className={`px-0 py-1 m-0 flex  h-full flex-col justify-between `} >
            <CardHeader className={`flex px-1.5 `} >
                <CardTitle className={`text-primary text-md font-semibold`} > {productname}  </CardTitle>
            </CardHeader>
            <CardFooter className={`w-full  px-2 flex items-center justify-between  font-medium`} >
                <h1 className="text-secondary font-mono font-medium text-xl" > {convertToMoney(harga)} </h1>
            </CardFooter>
            <CardFooter className={`w-full px-2 flex items-center justify-between`} >
                <h6 className="text-md font-mormal text-primary" > stock:{stock} </h6>
                {admin ? <Dropdownshop initialstock={stock} id={id} />
                    : <Link href={`/shop/${id}`} className="self-end" > <Button size="icon" variant="outline" className={`border-secondary`} > <ArrowUpRight /> </Button> </Link>}
            </CardFooter>
        </CardContent>
    </Card>
}