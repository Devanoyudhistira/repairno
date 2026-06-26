"use client"

import { NumericFormat } from "react-number-format";
import { Field, FieldGroup, FieldLabel, FieldLegend } from "../ui/field";
import { Input } from "../ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { Textarea } from "../ui/textarea";
import Imageinput from "./imageinput";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Spinner } from "../ui/spinner";
import { useActionState, useState } from "react";
import { createrepair } from "@/action/repaircrud";

export default function Createrepaireditem() {
    const [text, settext] = useState()
    const [title, settitle] = useState()
    const [image, setimage] = useState()
    const [showpreview, setshowpreview] = useState(false)
    const [state, action, pending] = useActionState(createrepair)
    return <form action={action}  >
        <FieldGroup>
            <FieldLegend className={`text-2xl m-0 font-semibold`} > Buat project baru </FieldLegend>
            <Field className={`-mt-4 flex flex-col lg:flex-row p-0 `} >
                <Imageinput change={image} setchange={setimage} />
                <div className="w-full lg:-ml-100 gap-1 flex flex-col " >
                    <FieldLabel htmlFor={"namamerk"} > merk barang </FieldLabel>
                    <Input name="namamerk" id="namamerk" placeholder="tulis nama merk barang yang anda perbaiki" type={"text"} />
                    <FieldLabel htmlFor={"namamodel"} > Nama model </FieldLabel>
                    <Input name="namamodel" id="namamodel" placeholder="tulis nama model dari barang yang anda perbaiki " type={"text"} />
                    <div className={`gap-4 flex items-center`} >
                        <div className="w-full" >
                            <FieldLabel htmlFor="namapelanggan" > nama pelanggan </FieldLabel>
                            <Input name="namapelanggan" id="namapelanggan" placeholder="nama pelanggan" />
                        </div>
                        <div className="w-full" >
                            <FieldLabel htmlFor="nomerpelanggan" > nomer pelanggan </FieldLabel>
                            <Input name="nomerpelanggan" id="nomerpelanggan" placeholder="+6234823289" />
                        </div>
                    </div>
                    <FieldLabel htmlFor={"deskripsi"} > apa masalah  </FieldLabel>
                    <Textarea name="keluhan" id="deskripsi" className={`resize-none h-50`} placeholder="deskripsi kan masalah nya " />
                    <FieldLabel htmlFor={"biaya"} > Total biaya </FieldLabel>
                    <InputGroup>
                        <InputGroupAddon> Rp. </InputGroupAddon>
                        <NumericFormat
                            customInput={InputGroupInput}
                            thousandSeparator="."
                            decimalSeparator=","
                            name="biaya"
                            id="harga"
                        />
                    </InputGroup>
                </div>
            </Field>
            <Button size="lg" variant={pending ? "outline" : "default"} className={`text-2xl self-center w-full ml-10 lg:ml-0 flex gap-1 mr-10`}>
                {pending ? <span className="flex gap-1 items-center " > <Spinner className={`size-8`} /> Loading </span> : <span className="flex gap-1" > <Plus className="size-8" /> Buat </span>} </Button>
        </FieldGroup>
        <div className="w-full self-center flex items-center justify-center gap-2" >
        </div>
    </form>
}