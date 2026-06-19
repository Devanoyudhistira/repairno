import Repaircard from "@/components/repaireCard";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { ArrowBigDownDash } from "lucide-react";


export default function Home() {
  return (
    <main className="w-screen">
      <nav className="w-full h-14 border-primary border-b-2 flex items-center px-3" >
        <h1 className="text-primary font-semibold text-xl" > Repair-no </h1>
      </nav>
      <div className="grid w-full grid-cols-1 gap-5 px-2 mt-3 md:grid-cols-2 lg:grid-cols-3" >
        <Repaircard/>
        <Repaircard/>
        <Repaircard/>
        <Repaircard/>
      </div>
    </main>
  );
}
