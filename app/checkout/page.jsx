import Checkoutcard from "@/components/checkout-card";
import Checkoutdetaillist from "@/components/checkout-detail.-list";
import Detatiledlist from "@/components/detailedlist";
import Navbar from "@/components/navbar";
import Paymentradio from "@/components/paymentradio";
import Specdesk from "@/components/specdesc";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { userimage } from "@/lib/userid";
import Image from "next/image";

export default async function page(params) {
    const user_image = await userimage()
    return (
        <main className="w-screen" >
            <Navbar addcontext={"checkout"} />
            <div className="w-full h-screen flex flex-col lg:flex-row items-center py-3 gap-4" >
                <div className="w-full lg:w-1/2 h-full px-4" >
                    <Card className={` h-max`} >
                        <CardHeader className={`text-md lg:text-lg  font-semibold`} >Order summary</CardHeader>
                        <Separator />
                        <CardContent className={`p-0 px-1 h-60 overflow-y-auto  `} >
                            <Checkoutcard />
                            <Checkoutcard />
                        </CardContent>
                        <CardFooter className={`w-full gap-2 flex-col p-0 px-5`} >
                            <Checkoutdetaillist category={"subtotal"} value={"20.000"} />
                            <Checkoutdetaillist category={"ongkir"} value={"20.000"} />
                            <Checkoutdetaillist category={"total"} value={"40.000"} />
                        </CardFooter>
                    </Card>
                </div>
                <div className="lg:w-1/2 w-full h-full px-4" >
                    <Card className={"h-max "} >
                        <CardHeader className={`text-md lg:text-lg font-semibold`} > metode pembayaran </CardHeader>
                        <Separator />
                        <CardContent>
                            <Paymentradio />
                        </CardContent>
                        <CardAction className={"w-full px-3"} > <Button size="lg" variant="default" className={"w-full text-xl font-medium"} > Konfirmasi </Button> </CardAction>
                    </Card>
                </div>
            </div>
        </main>
    )
}