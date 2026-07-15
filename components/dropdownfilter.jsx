"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Checkbox } from "./ui/checkbox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { useRouter, useSearchParams } from "next/navigation"

export default function Dropdownfilter({ filtername, items, category }) {
    const router = useRouter()
    const searchParams = useSearchParams();
    const filterhandle = (category, value) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(category, value);
        } else {
            params.delete(category);
        }

        router.push(`?${params.toString()}`);
    };

    return <Select key={searchParams.get(filtername) ?? "empty"}
        value={searchParams.get(filtername) ?? undefined} onValueChange={e => filterhandle(filtername, e)} items={items} >
        <SelectTrigger> <SelectValue placeholder={filtername} /> </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel> {filtername} </SelectLabel>
                {items.map((item) => (
                    <SelectItem key={item} value={item}>
                        {item}
                    </SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
    </Select>
}