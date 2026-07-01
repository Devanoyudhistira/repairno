"use client"

export default function Detatiledlist({value,category}) {
    return (
        <li className="w-full justify-between flex gap-3 items-center " >
            <h2 className="text-secondary-foreground font-medium capitalize " > {category} </h2>
            <h2 className="text-secondary-foreground font-medium capitalize " > {value} </h2>
        </li>
    )
}
