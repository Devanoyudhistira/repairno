import Navbar from "@/components/navbar";
import Productcard from "@/components/productcard";
import { Toaster } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";
import userid from "@/lib/userid";
import supabase from "@/supabase/supabase";
import { Archive } from "lucide-react";
import { BoxIcon } from "lucide-react";

export default async function page(params) {
    const { data, error } = await supabase.from("wishlist").select("item(*)")
    const user_id = await userid()
    return (
        <>
            <Toaster />
            <Navbar />
            {data.length <= 0 &&
                <div className=" flex flex-col items-center justify-center" >
                    <Archive className={"size-13 lg:size-30"} />
                    <h1 className="text-xl lg:text-3xl font-semibold capitalize" > you have no wishlist </h1>
                </div>

            }
            <main className="w-full px-3 grid gap-x-4 gap-y-3 mt-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3" >
                {data.length >= 0 && data.map(e =>
                    <Productcard authincated={user_id} stock={e.item.stock} id={e.item.id} key={e.item.id} wishlist={true} productname={e.item.name} image={e.item.gambar} harga={e.item.price} />
                )}
            </main>
        </>
    )
}