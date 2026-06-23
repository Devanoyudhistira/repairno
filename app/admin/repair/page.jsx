import Repaircard from "@/components/admin/repaircard";
import Navbar from "@/components/navbar";
import supabase from "@/supabase/supabase";

export default async function Page({ }) {
    const { data, error } = await supabase.from("repaired-item").select("*").order("created_at",{ascending:false})
    console.log(data)
    return <main>
        <Navbar singlepage={true} addcontext={"repair-page"} />
        <article className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 py-2 mt-4 w-full gap-3" >
            {data.map(e =>
                <Repaircard data={e} key={e.id} />
            )}
        </article>
    </main>
}