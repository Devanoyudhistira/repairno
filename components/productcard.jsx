"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowBigLeft } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

export default function Productcard({image,productname,harga}) {
    return <Card size="md" className={`border-primary m-0 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border p-1 gap-0 bg-primary-foreground`} >
        <Image className="w-full h-40 mt-1 object-center object-cover" src={"/image/"+image} alt="productname" width={300} height={300} />
        <CardContent className={`p-0 m-0 `} >
            <CardHeader className={`flex px-1.5 `} >
                <CardTitle className={`text-primary text-md font-semibold`} > {productname}  </CardTitle>
            </CardHeader>
            <CardFooter className={`w-full mt-2 px-2 flex items-center justify-between  font-medium`} >
                <h1 className="text-secondary font-mono font-medium text-xl" > Rp.{harga} </h1>
                <Button size="icon" variant="secondary" > <ArrowUpRight/> </Button>
            </CardFooter>
        </CardContent>
    </Card>
}