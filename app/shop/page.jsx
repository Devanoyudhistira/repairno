import Skeletonloading from "@/components/loadingskeleton";
import Navbar from "@/components/navbar";
import Productcard from "@/components/productcard";
import supabase from "@/supabase/supabase";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

export default async function Page() {
    const { data, error } = await supabase.from("shop").select("*")
    return <main className="text-primary" >
        <Navbar />
        <Suspense fallback={<Skeletonloading/>} >
            <article className="w-full px-3 grid gap-x-4 gap-y-3 mt-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3" >
                {data.map(e =>
                    <Productcard stock={e.stock} id={e.id} key={e.id} productname={e.name} image={e.gambar} harga={e.price} />
                )}
            </article>
        </Suspense>
    </main>
}