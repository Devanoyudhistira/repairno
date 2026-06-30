import Buyitem from "@/components/buy-item"
import Detatiledlist from "@/components/detailedlist"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import convertToMoney from "@/function/convert"
import imageurl from "@/lib/imageurl"
import supabase from "@/supabase/supabase"
import Image from "next/image"

export default async function Page({ params }) {
    const { id } = await params
    const { data, error } = await supabase.from("shop").select("*").eq("id", id).single()          

    return (
        <main className={`w-full flex flex-col items-center`} >
            <Navbar singlepage={true} addcontext={"Product detail"} />
            <div className="flex flex-col w-full mt-3 " >
                <Image src={imageurl(data.gambar)} alt={data.name} width={700} height={700} loading="eager" className="object-cover px-6 object-center w-full h-50 lg:h-120 rounded-xl" />
            </div>
            <Card className={`p-2 border-transparent border-0 bg-transparent border-none mt-2 w-[94%] lg:w-[98%] `} >
                <CardHeader className={`w-full font-semibold border-transparent border-none border-0 text-xl p-0 flex justify-between`} >
                    <h1> {data.name} </h1>
                    <h1> {convertToMoney(data.price)} </h1>
                </CardHeader>
                <CardContent className={`p-0 w-full`} >
                    <h1 className="text-primary text-xl font-semibold capitalize" > Detail product </h1>
                    <ul className="w-full px-2 text-md flex flex-col gap-3 mt-2 " >
                        <Detatiledlist value={"baru"} category={"Condition"} />
                        <Detatiledlist category={"spesifikasi"} value={"8 gigabyte"} />
                        <Detatiledlist category={"garansi"} value={"2 tahun"} />
                    </ul>
                </CardContent>
                <CardDescription className={`text-primary font-medium text-md`} >
                    {data.description}
                </CardDescription>
                <CardAction className={`p-0 w-full`} >
                    <Buyitem id={data.id} />
                </CardAction>
            </Card>
        </main>

    )
}