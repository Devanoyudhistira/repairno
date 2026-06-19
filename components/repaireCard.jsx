import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FileExclamationPoint } from "lucide-react";
import { FileWarning } from "lucide-react";
import { TriangleAlertIcon } from "lucide-react";
import Link from "next/link";

export default function Repaircard() {
    return <Card variant={"primary"} className={`px-2 p-0 flex flex-row items-start border border-foreground gap-2`} size="lg" >
        <Image alt="nama barang" className="object-cover w-42 h-28 object-center" width={500} height={500} src={"/image/laptop1.jpg"} />
        <div className="w-full h-full  justify-between flex flex-col" >
            <CardHeader className={`flex-row flex items-start w-full gap-3 px-2  justify-between`} >
                <div className="gap-0 " >
                    <CardTitle className={`text-md m-0  shrink-0 font-semibold`} > acer aspire e1 </CardTitle>
                    <CardDescription className={`font-medium text-xs text-black`} >
                        <h1> atas nama: Devano yudhistira </h1>
                        <h2 className="text-foreground font-bold mt-0.5" > keluhan:ganti ram </h2>
                    </CardDescription>
                </div>
            </CardHeader>
            <CardFooter className={`p-0 py-1 w-full justify-self-end self-end flex flex-row items-center gap-0 justify-between font-bold text-warning `} >
                <CardAction >
                    <Link href={"/20"} >
                        <Button size="xs" variant="link" className={`flex gap-1 lg:mt-0 items-center`} >
                            lihat barang <ArrowRight />
                        </Button>
                    </Link>
                </CardAction>
                <div className={`p-0 px-2 flex items-center justify-end w-auto text-right`} >
                    <h1 className=" flex items-center gap-1 " > <TriangleAlertIcon /> prosess </h1>
                </div>
            </CardFooter>
        </div>
    </Card>
}