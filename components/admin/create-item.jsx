"use client"
import { NumericFormat } from "react-number-format";
import { Field, FieldGroup, FieldLabel, FieldLegend } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { useActionState, useState } from "react";
import Imageinput from "./imageinput";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Plus } from "lucide-react";
import { createitem } from "@/action/shopcrud";
import { Spinner } from "../ui/spinner";
import Variantinput from "../variantinput";


export default function Createitem({ }) {
    const [text, settext] = useState()
    const [title, settitle] = useState()
    const [image, setimage] = useState()
    const [showpreview, setshowpreview] = useState(false)
    const [state, action, pending] = useActionState(createitem)
    return <form action={action} >
        <FieldGroup>
            <FieldLegend className={`text-2xl m-0 font-semibold`} > Buat dagangan baru </FieldLegend>
            <Field className={`-mt-4 flex flex-col lg:flex-row p-0 `} >
                <Imageinput change={image} setchange={setimage} />
                <div className="w-full lg:-ml-100 gap-1 flex flex-col " >
                    <FieldLabel htmlFor={"nama"} > Nama Barang </FieldLabel>
                    <Input name="nama" id="nama" placeholder="tulis nama dagangan anda " type={"text"} />
                    <FieldLabel htmlFor={"deskripsi"} > Deskripsi barang </FieldLabel>
                    <Textarea name="deskripsi" id="deskripsi" className={`resize-none h-50`} placeholder="tulis deskripsi dagangan anda " />
                    <FieldLabel htmlFor={"harga"} > Harga Barang </FieldLabel>
                    <InputGroup>
                        <InputGroupAddon> Rp. </InputGroupAddon>
                        <NumericFormat
                            customInput={InputGroupInput}
                            thousandSeparator="."
                            decimalSeparator=","
                            name="harga"
                            id="harga"
                        />
                    </InputGroup>
                    <Variantinput/>
                </div>
            </Field>
            <Button size="lg" variant={pending ? "outline" : "default"} className={`text-2xl self-center w-full ml-10 lg:ml-30 flex gap-1 mr-10`}>
                {pending ? <span className="flex gap-1 items-center " > <Spinner className={`size-8`} /> Loading </span> : <span className="flex gap-1" > <Plus className="size-8" /> Buat </span>} </Button>
        </FieldGroup>
        <div className="w-full self-center flex items-center justify-center gap-2" >
        </div>
    </form>
}