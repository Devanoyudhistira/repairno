"use client"

import { Separator } from "./ui/separator"

export default function Detatiledlist({value,category}) {
    return (
        <li className="w-full grid-cols-2 items-end content-end justify-end grid  gap-3  " >
            <h2 className="text-secondary-foreground text-xl uppercase font-medium flex items-center justify-start" > {category} </h2>
            <h2 className="text-secondary-foreground text-xl w-max font-normal capitalize  flex items-center justify-end" > {value} </h2>
            <Separator className={"col-span-2"} />
        </li>
    )
}
