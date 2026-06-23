import Navbar from "@/components/navbar";
import Productcard from "@/components/productcard";
import supabase from "@/supabase/supabase";

export default async function Page(){
    const {data,error} = await supabase.from("shop").select("*")    
    return <main className="text-primary" >
        <Navbar/>
        <article className="w-full px-3 grid gap-x-4 gap-y-3 mt-2 grid-cols-2 lg:grid-cols-4 md:grid-cols-3" >
            {data.map(e => 
            <Productcard stock={e.stock} id={e.id} key={e.id} productname={e.name} image={e.gambar} harga={e.price} />        
            )}
        </article>        
    </main>
}