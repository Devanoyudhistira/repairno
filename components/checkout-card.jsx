"use client"

import Image from "next/image"

export default function Checkoutcard() {
    return <div className="flex items-top gap-2 pb-4 justify-between items-center px-3" >
        <div className="flex gap-2 items-center" >
            <Image src={"/image/case.jpg"} alt="image" width={200} height={200} className="object-cover object-center w-22 h-22 aspect-square " />
            <div>
                <h1 className="text-lg font-medium" > nama barang nya </h1>
                <ul className="text-xs font-normal" >
                    <li> variant 1 </li>
                    <li> variant 2 </li>
                </ul>
            </div>
        </div>
        <h1 className="text-secondary text-xl font-semibold" > Rp.250.000 </h1>
    </div>
}