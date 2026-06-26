"use client"
import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Eye } from "lucide-react";
import { Delete } from "lucide-react";
import { Pencil } from "lucide-react";
import { TrashIcon } from "lucide-react";
import Drawerstock from "./drawerstock";
import { DrawerTrigger } from "../ui/drawer";
import { useActionState, useState } from "react";
import { Pen } from "lucide-react";
import Deletealert from "./deletealert";
import Updatesectionshop from "./update-section-shop";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { Spinner } from "../ui/spinner";
import { restock, updatename, updateprice } from "@/action/shopcrud";
import { Field, FieldGroup, FieldLabel, FieldLegend } from "../ui/field";
import { Input } from "../ui/input";
import { NumericFormat } from "react-number-format";
import convertToMoney from "@/function/convert";


export default function Dropdownshop({ id, initialstock, initialname, initialprice, deleteaction }) {
    const [openrestock, setopenrestock] = useState(false)
    const [newstock, setnewstock] = useState(initialstock)
    const [openrename, setopenrename] = useState(false)
    const [newname, setnewname] = useState(initialname)
    const [openrepricing, setopenrepricing] = useState(false)
    const [newprice, setnewprice] = useState(initialprice)
    const [deletealert, setdeletealert] = useState(false)
    return <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button size="icon" variant="link" > <Ellipsis /> </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Eye /> <span> lihat barang</span>
                </DropdownMenuItem>
                <Updatesectionshop setopenrestock={setopenrestock} setopenpricing={setopenrepricing} setopenrename={setopenrename} />
                <DropdownMenuItem variant="destructive" onClick={() => setdeletealert(true)} >
                    <TrashIcon />  hapus barang
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <Deletealert deleteaction={deleteaction} opencondition={deletealert} setopencondition={setdeletealert} id={id} deskripsi={`tindakan ini akan menghapus barang dagangan anda anda yakin ?.`} title={"hapus barang ?"} />
        <Drawerstock drawerescription={'tambah atau kurangi jumlah stock yang tersisa dari barang ini'} drawertitle={"ubah stock"} setaction={restock.bind(null, id, newstock)} id={id} newstock={newstock} setnewstock={setnewstock} condition={openrestock} setcondition={setopenrestock}>
            <div className="w-full flex items-center text-4xl font-semibold gap-20 justify-center" >
                <Button type="button" className={`w-14 h-14`} onClick={() => setnewstock(newstock - 1)} size="icon" variant="outline" > <Minus className={`size-10`} /> </Button>
                <h1> {newstock} </h1>
                <Button type="button" className={`w-14 h-14`} onClick={() => setnewstock(newstock + 1)} size="icon" variant="outline" > <Plus className={`size-10`} /> </Button>
            </div>
        </Drawerstock>
        <Drawerstock drawertitle={"edit nama"} drawerescription={"buatlah nama baru untuk barang dagangan anda"} setaction={updatename.bind(null, id)} condition={openrename} setcondition={setopenrename} >
            <Field className={`w-[70%] self-center`} >
                <FieldLegend> ubah nama barang anda </FieldLegend>
                <FieldGroup>
                    <Input id="newname" value={newname} onChange={e => setnewname(e.target.value)} name="newname" placeholder="masukan nama baru anda disini" />
                </FieldGroup>
            </Field>
        </Drawerstock>
        <Drawerstock drawertitle={"edit nhargaama"} drawerescription={"buatlah harga baru untuk barang dagangan anda"} setaction={updateprice.bind(null, id)} condition={openrepricing} setcondition={setopenrepricing} >
            <Field className={`w-[70%] self-center`} >
                <FieldLegend> ubah harga barang anda </FieldLegend>
                <FieldGroup>
                    <NumericFormat
                        customInput={Input}
                        thousandSeparator="."
                        decimalSeparator=","                        
                        id="newprice" 
                        value={convertToMoney(newprice)} 
                        onChange={e => setnewprice(e.target.value)} 
                        name="newprice" 
                        placeholder="masukan harga baru anda disini"
                    />
                </FieldGroup>
            </Field>
        </Drawerstock>
    </>
}