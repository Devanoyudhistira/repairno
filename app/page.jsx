import Navbar from "@/components/navbar";
import Repaircard from "@/components/repaireCard";
import { Button } from "@/components/ui/button";
import supabase from "@/supabase/supabase";
import { Dot } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { ArrowBigDownDash } from "lucide-react";


export default async function Home() {
  const {data,error} = await supabase.from("repaired-item").select("*")  
  return (
    <main className="w-screen">
      <Navbar/>      
      <div className="grid w-full grid-cols-1 gap-5 px-2 mt-3 md:grid-cols-2 lg:grid-cols-3" >
        {data.map(e => 
        <Repaircard id={e.id} itemname={e.item_name} problem={e.problem} username={e.user_name.nama} key={e.id} />
        )}
      </div>
    </main>
  );
}
