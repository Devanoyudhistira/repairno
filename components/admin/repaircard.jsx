"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../ui/card"
import Dropdownmenurepair from "./dropdownupdaterepair"
import { Badge } from "../ui/badge"
import { deleterepair, updatestatus } from "@/action/repaircrud"

export default function Repaircard({ data }) {
    function statuscolor(status) {
        if (status === "error") {
            return "destructive"
        }
        else if (status === "success") {
            return "success"
        }
        return "warning"
    }
    
    return <Card className={`flex w-full gap-1 border-2 border-primary p-0 flex-row`} >
        <Image src={"/image/laptop1.jpg"} alt="gambar" width={300} height={300} className="object-center object-cover lg:w-50 w-30 h-full rounded-md" />
        <CardContent className={'flex flex-col w-full gap-1 p-0'} >
            <CardTitle className={`w-full px-1 py-1 m-0 flex justify-between items-center`} >
                <h1> {data.item_name}  </h1>
                <Badge variant={statuscolor(data.status)} > {data.status} </Badge>
            </CardTitle>
            <CardDescription className={`gap-1 m-0 px-1 -mt-3 `} >
                <h2> atas nama: {data.user_name.nama} </h2>
                <h2> keluhan: {data.problem} </h2>
            </CardDescription>
            <CardFooter className={`w-full justify-self-end self-end mr-1 p-2 flex items-end justify-end`} >
                <Dropdownmenurepair deleteaction={deleterepair} deletedescription={`tindakan ini akan menghapus project perbaikan anda, anda yakin ?.`} deletetitle={"hapus project ?"} id={data.id} statusupdate={updatestatus} />
            </CardFooter>
        </CardContent>
    </Card>
}