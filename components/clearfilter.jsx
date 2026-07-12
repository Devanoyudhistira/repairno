"use client"
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function Clearfilter({condition}){
    const router = useRouter()
    const pathname = usePathname();
    function clearfilter(){
        router.push(pathname)
    }
    return  condition && <Button onClick={clearfilter} variant="ghost"> <X/> remove all filter </Button>
}