"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { FieldLabel } from "../ui/field"
import { CameraIcon } from "lucide-react"
import { XIcon } from "lucide-react"
import { Label } from "../ui/label"

export default function Imageinput({ setchange, change }) {
    const [preview, setPreview] = useState(null)
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
                <div className="text-xl bg-primary-foreground border-dashed shadow-black/50 border-2 rounded-md font-bold w-full lg:w-1/2 flex flex-col gap-2 items-center justify-center  lg:ml-0 h-60 overflow-hidden relative">                    
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
                            <CameraIcon size={35} />
                            <FieldLabel>pilih gambar barang anda disini</FieldLabel>
                        </>
                    )}
                </div>

                <input
                    hidden
                    ref={inputRef}
                    type="file"
                    name="gambar"
                    id="gambar"
                    accept="image/*"
                    onChange={handleChange}
                />
            </Label>
        </>
    )
}