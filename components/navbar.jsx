"use client"

import Modetoggle from "./modetoggle"


export default function Navbar() {    
    return (<nav className="w-full h-14 border-primary border-b-2 flex items-center justify-between px-3" >
        <h1 className="text-primary font-semibold text-xl" > Repair-no </h1>        
        <Modetoggle/>
    </nav>)
}