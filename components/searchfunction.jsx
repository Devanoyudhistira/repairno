"use client"

import { Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Searchfunction({ currentsearch }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentvalue, setcurrentvalue] = useState(currentsearch)
    const [searchkey, setcurrentkey] = useState("")    
    function handleSearch(e) {
        e.preventDefault()
        const params = new URLSearchParams(searchParams.toString());        
        params.set("search", searchkey);
        router.push(`?${params.toString()}`);        
    }
    return <form onSubmit={ e=> handleSearch(e) } >
        <InputGroup>
            <InputGroupInput onChange={e => setcurrentkey(e.target.value)} placeholder="search" />
            <InputGroupAddon> <Search /> </InputGroupAddon>
        </InputGroup>
        <button type="submit" hidden ></button>
    </form>
}