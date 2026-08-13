"use client"

import { Ellipsis, Eye, TrashIcon, Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "../ui/dropdown-menu";
import Drawerstock from "./drawerstock";
import { useState } from "react";
import Deletealert from "./deletealert";
import Updatesectionshop from "./update-section-shop";
import { restock, updatename, updateprice } from "@/action/shopcrud";
import { Field, FieldGroup, FieldLegend } from "../ui/field";
import { Input } from "../ui/input";
import { NumericFormat } from "react-number-format";
import convertToMoney from "@/function/convert";

export default function Dropdownshop({
    id,
    initialstock,
    initialname,
    initialprice,
    deleteaction
}) {
    const [openrestock, setopenrestock] = useState(false);
    const [newstock, setnewstock] = useState(initialstock);

    const [openrename, setopenrename] = useState(false);
    const [newname, setnewname] = useState(initialname);

    const [openrepricing, setopenrepricing] = useState(false);
    const [newprice, setnewprice] = useState(initialprice);

    const [deletealert, setdeletealert] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="self-end">
                    <Button size="icon" variant="link">
                        <Ellipsis />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Eye />
                        <span>View item</span>
                    </DropdownMenuItem>

                    <Updatesectionshop
                        setopenrestock={setopenrestock}
                        setopenpricing={setopenrepricing}
                        setopenrename={setopenrename}
                    />

                    <DropdownMenuItem
                        variant="destructive"
                        onClick={() => setdeletealert(true)}
                    >
                        <TrashIcon />
                        Delete item
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Deletealert
                deleteaction={deleteaction}
                opencondition={deletealert}
                setopencondition={setdeletealert}
                id={id}
                deskripsi="This action will permanently delete this item. Are you sure?"
                title="Delete item?"
            />

            <Drawerstock
                drawerescription="Increase or decrease the remaining stock of this item."
                drawertitle="Update stock"
                setaction={restock.bind(null, id, newstock)}
                id={id}
                newstock={newstock}
                setnewstock={setnewstock}
                condition={openrestock}
                setcondition={setopenrestock}
            >
                <div className="w-full flex items-center text-4xl font-semibold gap-20 justify-center">
                    <Button
                        type="button"
                        className="w-14 h-14"
                        onClick={() => setnewstock(newstock - 1)}
                        size="icon"
                        variant="outline"
                    >
                        <Minus className="size-10" />
                    </Button>

                    <h1>{newstock}</h1>

                    <Button
                        type="button"
                        className="w-14 h-14"
                        onClick={() => setnewstock(newstock + 1)}
                        size="icon"
                        variant="outline"
                    >
                        <Plus className="size-10" />
                    </Button>
                </div>
            </Drawerstock>

            <Drawerstock
                drawertitle="Edit name"
                drawerescription="Enter a new name for this item."
                setaction={updatename.bind(null, id)}
                condition={openrename}
                setcondition={setopenrename}
            >
                <Field className="w-[70%] self-center">
                    <FieldLegend>Change name</FieldLegend>

                    <FieldGroup>
                        <Input
                            id="newname"
                            value={newname}
                            onChange={(e) => setnewname(e.target.value)}
                            name="newname"
                            placeholder="Enter the new name here"
                        />
                    </FieldGroup>
                </Field>
            </Drawerstock>

            <Drawerstock
                drawertitle="Edit price"
                drawerescription="Enter a new price for this item."
                setaction={updateprice.bind(null, id)}
                condition={openrepricing}
                setcondition={setopenrepricing}
            >
                <Field className="w-[70%] self-center">
                    <FieldLegend>Change price</FieldLegend>

                    <FieldGroup>
                        <NumericFormat
                            customInput={Input}
                            thousandSeparator="."
                            decimalSeparator=","
                            id="newprice"
                            value={convertToMoney(newprice)}
                            onChange={(e) => setnewprice(e.target.value)}
                            name="newprice"
                            placeholder="Enter the new price here"
                        />
                    </FieldGroup>
                </Field>
            </Drawerstock>
        </>
    );
}