import Buyitem from "@/components/buy-item"
import Detatiledlist from "@/components/detailedlist"
import Navbar from "@/components/navbar"
import Paymentoption from "@/components/payment-option"
import Slideitem from "@/components/slideitem"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import convertToMoney from "@/function/convert"
import imageurl from "@/lib/imageurl"
import supabase from "@/supabase/supabase"
import Image from "next/image"

export default async function Page({ params }) {
    const { id } = await params
    const { data, error } = await supabase.from("shop").select("*").eq("id", id).single()
    const { data: specdata, error: specerror } = await supabase.from("spec").select("*").eq("item", id)
    const { data: variantdata, error: varianrror } = await supabase.from("variant").select("*").eq("item", id)
    const categories = [...new Set(variantdata.map(v => v.variant_category))];
    console.log(id)
    console.log(categories)
    console.log(specerror)
    return (
        <div>
            <Toaster />
            <Navbar singlepage={true} addcontext={"Product detail"} />
            <main className={`w-full flex flex-col lg:px-4 lg:flex-row  items-center`} >
                <Slideitem image={imageurl(data.gambar)} />
                <Card className={`p-2 lg:ml-0 mr-3 ml-5 lg:ml-0 min-h-130 max-h-max lg:-mt-10 lg:h-100 justify-between bg-transparent border-transparent border-0  border-none mt-2 w-[92%] lg:w-[60%] `} >
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
                                    <Detatiledlist value={e.value} category={e.name} key={e.id} />
                                )}
                            </ul>
                        </CardContent>
                        <div>
                            {categories.map(c => 
                            <RadioGroup key={c} name="payment-method" defaultValue="haloo" className={"grid grid-cols-4 gap-2 items-center"} >
                                <h1 className="text-xl font-semibold col-span-4" > {c} </h1>
                                {variantdata.map(e =>
                                   e.variant_category === c && <Paymentoption key={e.id} title={e.name} value={e.name} description={""} />)
                                }
                            </RadioGroup>
                            )}
                        </div>
                    </div>
                    <CardAction className={`p-0 w-full`} >
                        <Buyitem id={data.id} />
                    </CardAction>
                </Card>
            </main>
        </div>
    )
}