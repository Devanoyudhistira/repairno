"use client"
import { NumericFormat } from "react-number-format";
import { Field, FieldGroup, FieldLabel, FieldLegend } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { useState } from "react";
import Imageinput from "./imageinput";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Plus } from "lucide-react";


export default function Createitem() {
    const [text, settext] = useState()
    const [title, settitle] = useState()
    const [image, setimage] = useState()
    const [showpreview, setshowpreview] = useState(false)
    return <form action="" cl >
        <FieldGroup>
            <FieldLegend className={`text-2xl m-0 font-semibold`} > Buat dagangan baru </FieldLegend>
            <Field className={`-mt-4  flex flex-col  lg:flex-row p-0 `} >
                <Imageinput change={image} setchange={setimage} />
                <div className="w-full -ml-6 lg:-ml-115 " >
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
                        />
                    </InputGroup>
                </div>
            </Field>
            <Button size="lg" variant="default" className={`text-2xl self-center w-full  flex gap-1 mr-10`}> <Plus className="size-8" /> Buat</Button>
        </FieldGroup>
        <div className="w-full self-center flex items-center justify-center gap-2" >
        </div>
    </form>
}