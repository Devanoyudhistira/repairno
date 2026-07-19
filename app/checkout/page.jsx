import Checkoutcard from "@/components/checkout-card";
import Checkoutdetaillist from "@/components/checkout-detail.-list";
import Detatiledlist from "@/components/detailedlist";
import Navbar from "@/components/navbar";
import Paymentradio from "@/components/paymentradio";
import Pricedefault from "@/components/pricedetail";
import Specdesk from "@/components/specdesc";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import convertToMoney from "@/function/convert";
import imageurl from "@/lib/imageurl";
import userid, { userimage } from "@/lib/userid";
import supabase from "@/supabase/supabase";
import Image from "next/image";

export default async function page() {
    const user_id = await userid()
    const { data, error } = await supabase.from("checkout").select("*,checkout_item(*)").eq("checkout_user", user_id)
    const totalprice = data.reduce((total, item) => {
        return total + item.checkout_item.price;
    }, 0);
    const allid = data.map(e => e.checkout_item.id)
    const allprice = data.map(e => e.checkout_item.price)
    const allvariant = data.map(e => e.checkout_variant)    
    const allname = data.map(e => e.checkout_item.name)    
    return (
        <main className="w-screen" >
            <Navbar addcontext={"checkout"} />
            <Toaster closeButton />
            <div className="w-full h-screen flex flex-col lg:flex-row items-center py-3 gap-4" >
                <div className="w-full lg:w-1/2 h-full px-4" >
                    <Card className={` h-max`} >
                        <CardHeader className={`text-md lg:text-lg  font-semibold`} >Order summary</CardHeader>
                        <Separator />
                        <CardContent className={`p-0 px-1 h-60 overflow-y-auto  `} >
                            {data.map(e =>
                                <Checkoutcard id={e.checkout_item.id} variant_id={e.checkout_variant} price={e.checkout_item.price} gambar={imageurl(e.checkout_item.gambar)} name={e.checkout_item.name} key={e.id} />
                            )}
                        </CardContent>
                        <CardFooter className={`w-full gap-2 flex-col p-0 px-5`} >
                            <Checkoutdetaillist category={"subtotal"} value={"20.000"} />
                            <Checkoutdetaillist category={"ongkir"} value={"20.000"} />
                            <Checkoutdetaillist category={"total"} value={convertToMoney(totalprice)} />
                        </CardFooter>
                    </Card>
                </div>
                <div className="lg:w-1/2 w-full h-full px-4" >
                    <Pricedefault itemarray={allid} price={totalprice} itemprice={allprice} itemaname={allname.join(" | ")} variantarray={allvariant} />
                </div>
            </div>
        </main>
    )
}