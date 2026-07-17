import Productcard from "@/components/productcard";
import { Toaster } from "@/components/ui/sonner";
import userid from "@/lib/userid";
import supabase from "@/supabase/supabase";

export default async function page(params) {
    const { data, error } = await supabase.from("wishlist").select("item(*)")
    console.log(data)
    const user_id = await userid()
    return (
        <>
            <Toaster />
            <main className="w-full px-3 grid gap-x-4 gap-y-3 mt-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3" >
                {data.map(e =>
                    <Productcard authincated={user_id} stock={e.item.stock} id={e.item.id} key={e.item.id} wishlist={true} productname={e.item.name} image={e.item.gambar} harga={e.item.price} />
                )}
            </main>
        </>
    )
}