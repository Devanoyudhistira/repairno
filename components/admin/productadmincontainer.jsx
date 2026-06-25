"use client"

import Productcard from "@/components/productcard";
import { useState } from "react";
import Adminshopbutton from "./admin-shop-button";

export default function Productcontainer({ data }) {
    const [grid, setgrid] = useState("2")
    return <div>
        <Adminshopbutton grid={grid} setgrid={setgrid} />
        <div className={`w-full grid mt-5 grid-cols-${grid} md:grid-cols-${grid} lg:grid-cols-${grid} gap-x-2 gap-y-4`} >
            {data.map(e =>
                <Productcard stock={e.stock} admin={true} id={e.id} image={e.gambar} productname={e.name} harga={e.price} key={e.id} />
            )}
        </div>
    </div>
}