"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "../ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
export default function Selectsort({ currentdate,currentasc }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentvalue, setcurrentvalue] = useState(currentdate)

    function handleSort(value) {
        const params = new URLSearchParams(searchParams.toString());

        if (value === "id") {
            params.set("sort", "id");
        } else if (value === "date") {
            params.set("sort", "date");
        }
        router.push(`?${params.toString()}`);
        setcurrentvalue(value)
    }
    function handleasc(value) {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("asc", "false");
        } else {
            params.set("asc", "true");
        }
        router.push(`?${params.toString()}`);
        setcurrentvalue(value)
    }
    return <FieldGroup className="w-full max-w-xs">
        <Field>
            <Select onValueChange={handleSort} defaultValue={currentvalue} >
                <SelectTrigger className={`w-1000`} >
                    <SelectValue className="truncate-none bg-red-700 whitespace-nowrap" />
                </SelectTrigger>
                <SelectContent className={`w-full`}  >
                    <SelectGroup className={`w-full`} >
                        <SelectItem value="id">sort by id</SelectItem>
                        <SelectItem value="date">tanggal ditambahkan</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
        <Field orientation="horizontal" >
            <Checkbox defaultChecked={currentasc} id="asc" onCheckedChange={(checked) => handleasc(checked === true)}  ></Checkbox>
            <FieldLabel htmlFor="asc" > ascending </FieldLabel>
        </Field>
    </FieldGroup>
}