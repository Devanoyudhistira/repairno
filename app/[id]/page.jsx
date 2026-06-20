import Datecard from "@/components/datecard";
import Specdesk from "@/components/specdesc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import supabase from "@/supabase/supabase";
import { CreditCard } from "lucide-react";
import moment from "moment";
import Image from "next/image";

export default async function Page({params}) {

    const {id} = await params

    const {data,error} = await supabase.from("repaired-item").select("*").eq("id",id).single()    
    return (
        <main className="w-screen min-h-full flex-col items-center pb-4 " >
            <header className="w-full px-2  " >
                <Card size="lg" className={`mt-3 flex flex-col lg:flex-row py-0 gap-0`} >
                    <CardHeader className={`p-0 lg:w-180 w-full h-full`} >
                        <Image src={"/image/laptop1.jpg"} className="w-full h-full object-cover object-center" alt="gambar product" width={600} height={600} />
                    </CardHeader>
                    <CardContent className="w-full p-0 pb-2 flex-col " >
                        <CardTitle className="text-xl lg:text-2xl capitalize mt-2 font-semibold px-2" > {data.item_name} </CardTitle>
                        <h2 className="text-md font-medium lg:text-xl px-2" > atas nama: <span className="capitalize" > {data.user_name.nama} </span> </h2>
                        <div className="w-full px-2 flex flex-col lg:mt-1 mt-4 items-start" >
                            <h3 className="text-gray-600 font-semibold lg:text-xl text-md" > keluhan </h3>
                            <h1 className="text-primary font-bold text-md lg:text-xl " > {data.problem} </h1>
                        </div>
                    </CardContent>
                </Card>
            </header>
            <div className="px-2 lg:px-6 w-full mt-4" >
                <Card size="md" className={`bg-primary-foreground gap-1 border-border border py-1 px-2`} >
                    <CardTitle className="text-2xl text-primary font-semibold" > spesifikasi produk </CardTitle>
                    <CardContent className="flex p-0 flex-col gap-2" >
                        <Specdesk category={"ram"} value={"8gb"} />
                        <Specdesk category={"model"} value={"Aspire e1"} />
                        <Specdesk category={"merk"} value={"acer"} />
                    </CardContent>
                </Card>
            </div>
            <div className="w-full mt-3 flex items-center  justify-center gap-4" >
                <Datecard status={"warning"} tanggal={moment(data.created_at).locale("ID").format("DD MMM")} />
                <Datecard status={"success"} tanggal={ data.finish_date ? moment(data.finish_date).locale("ID").format("DD MMM") : "NA" } />
            </div>
            <div className="w-full px-2 lg:px-4 flex flex-col items-center mt-4" >
                <h1 className="font-semibold text-3xl" > Total biaya </h1>
                <Card className={`border w-full mr-3 p-0 mt-2 px-2 lg:px-6 py-1 border-primary`} size="lg" >
                    <CardContent className={`text-[17px] p-0 gap-3 flex flex-col`} >
                        <Specdesk category={"upah jasa"} value={"53.000"} />
                        <Specdesk category={"ganti ram"} value={"130.000"} />
                        <Specdesk category={"ganti windows"} value={"53.000"} />
                        <Specdesk mode={true} category={"total"} value={"226.000"} />
                        <Button  className={`text-2xl`} size="lg" > <CreditCard size={64} className="size-6" />  Bayar sekarang </Button>
                    </CardContent>
                </Card>
            </div>
        </main>)
}