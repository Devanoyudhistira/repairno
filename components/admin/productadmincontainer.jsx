"use client"

import Productcard from "@/components/productcard";
import { Field, FieldContent, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import { Grid2X2 } from "lucide-react";
import { Grid3X3 } from "lucide-react";
import { useState } from "react";
import { Square } from "lucide-react";

export default function Productcontainer({ data }) {
    const [grid, setgrid] = useState("1")
    return <div className={`w-full grid px-3 mt-5 grid-cols-${grid} md:grid-cols-${grid} lg:grid-cols-${grid} gap-x-2 gap-y-4`} >
        <FieldGroup className={`px-1 flex items-center flex-row gap-2`} >
            <Field className={`p-0 w-full gap-1`} orientation="horizontal" >
                <Input placeholder={`cari`} name={`search`} id={`search`} />
                <Button variant="outline" size="icon" >
                    <Search />
                </Button>
            </Field>
            <FieldContent>
                <ButtonGroup className={`col-span-${grid} md:col-span-${grid} lg:col-span-${grid} self-end justify-self-end`} >
                    <Button className={`lg:hidden`} onClick={e => setgrid("1")} size="icon" variant="outline" > <Square /> </Button>
                    <Button onClick={e => setgrid("2")} size="icon" variant="outline" > <Grid2X2 /> </Button>
                    <Button className={"hidden lg:flex"} onClick={e => setgrid("3")} size="icon" variant="outline" > <Grid3X3 /> </Button>
                </ButtonGroup>
            </FieldContent>
        </FieldGroup>
        {data.map(e =>
            <Productcard admin={true} id={e.id} image={e.gambar} productname={e.name} harga={e.price} key={e.id} />
        )}
    </div>
}