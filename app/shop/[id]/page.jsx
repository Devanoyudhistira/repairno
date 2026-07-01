import Buyitem from "@/components/buy-item"
import Detatiledlist from "@/components/detailedlist"
import Navbar from "@/components/navbar"
import Slideitem from "@/components/slideitem"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Varianttab from "@/components/Variantabs"
import Varianimage from "@/components/variantimage"
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
            {/* <Tabs defaultValue="gambar1" className="flex flex-col mb-6  overflow-hidden rounded-xl mr-4 lg:mr-0 w-full mt-3 " >
                <Varianimage image={imageurl(data.gambar)} value={"gambar1"} />
                <Varianimage image={"/image/cpu.jpg"} value={"gambar2"} />
                <Varianimage image={"/image/cooler.jpg"} value={"gambar3"} />
                <TabsList className={`lg:py-10 py-3 px-2 gap-2`} >
                    <Varianttab value={"gambar1"} image={imageurl(data.gambar)} />
                    <Varianttab value={"gambar2"} image={"/image/psu.jpg"} />
                    <Varianttab value={"gambar3"} image={"/image/ram.jpg"} />
                </TabsList>
            </Tabs> */}
            <Slideitem image={imageurl(data.gambar)} />
            <Card className={`p-2 lg:mr-0 mr-3 h-130 lg:h-95 justify-between bg-transparent border-transparent border-0  border-none mt-2 w-[92%] lg:w-[98%] `} >
                <div className="flex flex-col gap-4" >
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
                </div>
                <CardAction className={`p-0 w-full`} >
                    <Buyitem id={data.id} />
                </CardAction>
            </Card>
        </main>

    )
}