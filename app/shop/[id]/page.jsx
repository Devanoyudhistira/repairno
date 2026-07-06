
import Itemdetailcomponent from "@/components/item-detail-component"
import Navbar from "@/components/navbar"
import Slideitem from "@/components/slideitem"
import { Toaster } from "@/components/ui/sonner"
import imageurl from "@/lib/imageurl"
import supabase from "@/supabase/supabase"

export default async function Page({ params }) {
    const { id } = await params
    const { data, error } = await supabase.from("shop").select("*").eq("id", id).single()
    const { data: specdata, error: specerror } = await supabase.from("spec").select("*").eq("item", id)
    const { data: variantdata, error: varianrror } = await supabase.from("variant").select("*").eq("item", id)
    const categories = [...new Set(variantdata.map(v => v.variant_category))];
    const defaultgroup = variantdata.filter(e => e.default_variant)
    const defaultname = defaultgroup.map(e => ({ category: e.variant_category, id: e.id }))
    return (
        <div>            
            <Toaster />
            <Navbar singlepage={true} addcontext={"Product detail"} />
            <main className={`w-full flex flex-col lg:px-4 lg:flex-row  items-center`} >
                <Slideitem image={imageurl(data.gambar)} />
                <Itemdetailcomponent variantdata={variantdata} data={data} defaultname={defaultname} categories={categories} specdata={specdata} />
            </main>
        </div>
    )
}