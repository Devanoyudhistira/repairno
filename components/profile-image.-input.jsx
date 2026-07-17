"use client"

import Image from "next/image"
import { Label } from "./ui/label"
import { XIcon } from "lucide-react"
import { CameraIcon } from "lucide-react"
import { FieldLabel } from "./ui/field"
import { useRef, useState } from "react"

export default function Profileimageinput() {
    const [preview, setPreview] = useState(null)
    const [change,setchange] = useState()
    const inputRef = useRef(null)

    const handleChange = (e) => {
        const file = e.target.files?.[0]
        if (!file) return

        const url = URL.createObjectURL(file)
        setchange(url)
    }

    const handleRemove = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setchange(null)
        if (inputRef.current) inputRef.current.value = ""
    }

    return (
        <>
            <Label
                htmlFor="gambar">
                <div className="text-xl bg-transparent border-dashed border-accent shadow-black/50 border-2 mt-3 font-bold w-35 rounded-full h-35 lg:w-50 lg:h-50 flex flex-col gap-2 items-center justify-center text-accent lg:ml-0 overflow-hidden relative">
                    {change ? (
                        <>
                            <Image width={500} height={500} src={change} alt="preview" className="w-full h-full object-cover object-center rounded-md"
                            />
                            <button
                                onClick={handleRemove}
                                className="absolute top-1 right-1 bg-black/60 hover:bg-black/80 text-white rounded-full p-0.5"
                            >
                                <XIcon size={16} />
                            </button>
                        </>
                    ) : (
                        <>
                            <CameraIcon  size={35} />                            
                        </>
                    )}
                </div>

                <input
                    hidden
                    ref={inputRef}
                    type="file"
                    name="profile_image"
                    id="gambar"
                    accept="image/*"
                    onChange={handleChange}
                />
            </Label>
        </>
    )
}