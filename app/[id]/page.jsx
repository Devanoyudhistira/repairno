
import Itemdetailcomponent from "@/components/item-detail-component"
import Navbar from "@/components/navbar"
import Slideitem from "@/components/slideitem"
import { Toaster } from "@/components/ui/sonner"
import imageurl from "@/lib/imageurl"
import userid from "@/lib/userid"
import supabase from "@/supabase/supabase"

export default async function Page({ params }) {
    const { id } = await params
    const user_id = await userid()
    const { data, error } = await supabase.from("shop").select("*").eq("id", id).single()
    const { data: specdata, error: specerror } = await supabase.from("spec").select("*").eq("item", id)
    const { data: variantdata, error: varianrror } = await supabase.from("variant").select("*").eq("item", id)
    const categories = [
        ...new Set(
            variantdata.map(v =>
                v.variant_category
                    .trim()
                    .replace(/\s+/g, "")
                    .toLowerCase()
            )
        )
    ];
    const defaultgroup = variantdata.filter(e => e.default_variant)
    console.log(variantdata)
    const defaultname = defaultgroup.map(e => ({ category: e.variant_category,id: e.id,name:e.name,price:e.variant_price }))
    const { data: checkout, error: checkouterror } = await supabase.from("checkout").select("checkout_item").eq("checkout_user", user_id).eq("checkout_item",id).single()
    console.log(checkout)
    return (
        <div>
            <Toaster closeButton  />
            <Navbar singlepage={true} addcontext={"Product detail"} />
            <main className={`w-full flex flex-col lg:px-4 lg:flex-row  items-center`} >
                <Slideitem image={imageurl(data.gambar)} />
                <Itemdetailcomponent checkouted={checkout?.checkout_item} variantdata={variantdata} data={data} defaultname={defaultname} categories={categories} specdata={specdata} />
            </main>
        </div>
    )
}