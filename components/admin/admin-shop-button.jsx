import { Field, FieldContent, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import { Grid2X2 } from "lucide-react";
import { Grid3X3 } from "lucide-react";
import { Square } from "lucide-react";


export default function Adminshopbutton({setgrid,grid}) {
    return <div className="w-full" >
        <FieldGroup className={`px-1 flex items-center flex-row gap-2 col-span-${grid + 1} md:col-span-${grid + 1} lg:col-span-${grid + 1}`} >
            <Field className={`p-0 w-full gap-1`} orientation="horizontal" >
                <Input placeholder={`cari`} name={`search`} id={`search`} />
                <Button variant="outline" size="icon" >
                    <Search />
                </Button>
            </Field>            
        </FieldGroup>
    </div>
}