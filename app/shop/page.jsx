import Skeletonloading from "@/components/loadingskeleton";
import Navbar from "@/components/navbar";
import Productcard from "@/components/productcard";
import Searchfunction from "@/components/searchfunction";
import supabase from "@/supabase/supabase";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

export default async function Page({searchParams}) {
    const {search} = await searchParams
    let alldata =  supabase.from("shop").select("*",{count:"exact"})
    if(search && search.length >= 1){
       alldata = alldata.or(`name.ilike.%${search}%`)
    }
    const {data,error} = await alldata
    return <main className="text-primary" >
        <Navbar />
        <div className="w-full lg:px-10 px-3 mt-4" >
        <Searchfunction  />
        </div>
        <article className="w-full px-3 grid gap-x-4 gap-y-3 mt-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3" >
            {data.map(e =>
                <Productcard stock={e.stock} id={e.id} key={e.id} productname={e.name} image={e.gambar} harga={e.price} />
            )}
        </article>
    </main>
}