import Clearfilter from "@/components/clearfilter";
import Dropdownfilter from "@/components/dropdownfilter";
import Skeletonloading from "@/components/loadingskeleton";
import Navbar from "@/components/navbar";
import Productcard from "@/components/productcard";
import Searchfunction from "@/components/searchfunction";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import supabase from "@/supabase/supabase";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }) {
    const { search, category, urutkan } = await searchParams
    let alldata = supabase.from("shop").select("*", { count: "exact" })
    if (search && search.length >= 1) {
        alldata = alldata.or(`name.ilike.%${search}%`)
    }
    if (category) {
        alldata = alldata.ilike("category", category)
    }


    if (urutkan === "terbaru") {
        alldata = alldata.order("created_at", { ascending: false })
    }
    else if (urutkan === "terlama") {
        alldata = alldata.order("created_at", { ascending: true })
    }
    else if (urutkan === "termurah") {
        alldata = alldata.order("price", { ascending: true })
    }

    const filter = [
        {
            label: "category",
            value: ["laptop", "ssd", "ram", "Phone case", "Processor"]
        },
        {
            label: "urutkan",
            value: ["terbaru", "termurah", "terlama", "diskon"]
        }
    ]


    const { data, error } = await alldata
    console.log(data)
    console.log(error)
    return <main className="text-primary" >
        <Navbar />
        <div className="w-full lg:px-10 px-3 mt-4" >
            <Searchfunction />
            <div className="w-full flex items-center gap-2 mt-3" >
                {filter.map(e =>
                    <Dropdownfilter items={e.value} key={e.label} filtername={e.label} />
                )}
                <Clearfilter condition={category || search || urutkan} />
            </div>
        </div>
        <article className="w-full px-3 grid gap-x-4 gap-y-3 mt-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3" >
            {data.map(e =>
                <Productcard stock={e.stock} id={e.id} key={e.id} productname={e.name} image={e.gambar} harga={e.price} />
            )}
        </article>
    </main>
}