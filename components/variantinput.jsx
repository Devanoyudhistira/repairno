"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { InputGroup } from "./ui/input-group";
import { NumericFormat } from "react-number-format";

export default function Variantinput() {
    const [allvariant, setallvariant] = useState(
        Array.from({ length: 3 })
    );

    console.log(allvariant);

    return (
        <>
            <h1>Add variants</h1>

            <div className="flex flex-col gap-1">
                {allvariant.map((e, i) => (
                    <InputGroup
                        className="border-none gap-3 flex flex-row"
                        key={i}
                    >
                        <Input
                            placeholder="Variant name"
                            name="variant_name"
                        />

                        <Input
                            placeholder="Category"
                            name="category_variant"
                        />

                        <NumericFormat
                            customInput={Input}
                            thousandSeparator="."
                            decimalSeparator=","
                            placeholder="Price"
                            name="harga_variant"
                            id="harga_variant"
                        />
                    </InputGroup>
                ))}
            </div>

            <Button
                onClick={() =>
                    setallvariant((prev) => [
                        ...prev,
                        [Math.random()]
                    ])
                }
                variant="outline"
                type="button"
                className="w-full h-max py-2 font-semibold lg:text-xl text-md rounded-xl flex items-center justify-center border-2 border-dashed"
            >
                Add variant
            </Button>
        </>
    );
}