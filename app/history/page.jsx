import Historycard from "@/components/historycard";
import Navbar from "@/components/navbar";
import userid from "@/lib/userid";
import supabase from "@/supabase/supabase";

export default async function Page() {
    const user_id = await userid()
    const {data} = await supabase.from("payment_shop_history").select("*").eq("user_id",user_id)
    return <main className="w-screen flex flex-col gap-2" >
        <Navbar addcontext={"history"} />
        <h1 className="text-xl lg:text-2xl text-secondary uppercase ml-3" > Your History </h1>
        <div className="grid grid-cols-1 px-4 gap-y-4  md:grid-cols-2 lg:grid-cols-4 gap-2" >
            <Historycard/>
            <Historycard/>
            <Historycard/>
            <Historycard/>
        </div>
    </main>
}