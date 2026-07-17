import Clearfilter from "@/components/clearfilter";
import Dropdownfilter from "@/components/dropdownfilter";
import Skeletonloading from "@/components/loadingskeleton";
import Navbar from "@/components/navbar";
import Productcard from "@/components/productcard";
import Searchfunction from "@/components/searchfunction";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import userid from "@/lib/userid";
import supabase from "@/supabase/supabase";
import { Search } from "lucide-react";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }) {
    const { search, category, urutkan } = await searchParams
    const user_id = await userid()
    const { data: wishlist, error: wishlistterror } = await supabase.from("wishlist").select("item").eq("user", user_id)
    const wishlistSet = new Set(
        wishlist.map(item => item.item)
    );
    console.log(wishlistSet)
    let alldata = supabase.from("shop").select("*", { count: "exact" })
    const searchquery = search && search.length >= 1
    const activesearch = searchquery
    if (searchquery) {
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
    console.log(data.length)
    return <main className="text-primary pb-22" >
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
        {activesearch && data.length === 0 &&
            <div className="w-full flex flex-col items-center gap-2 justify-center" >
                <h1 className="mt-10 text-3xl lg:text-6xl font-medium" > barang tidak ditemukan </h1>
                <h2 className="text-xl lg:text-5xl gap-3 text-foreground flex items-center font-thin" > cari lagi <Search className="size-8 font-thin" /> </h2>
            </div>
        }
        <article className="w-full px-3 grid gap-x-4 gap-y-3 mt-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3" >
            {data.map(e =>
                <Productcard authincated={user_id} stock={e.stock} id={e.id} key={e.id} wishlist={wishlistSet.has(e.id)} productname={e.name} image={e.gambar} harga={e.price} />
            )}
        </article>
    </main>
}