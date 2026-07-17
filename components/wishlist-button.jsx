"use client"

import { Heart } from "lucide-react"

export default function Wishlistbutton({handle,wishlisht}){
    return <button onClick={handle} className="absolute top-2 left-3" > <Heart className={`text-red-700 size-8 transition ${wishlisht && 'fill-red-700'} `} /> </button> 
}