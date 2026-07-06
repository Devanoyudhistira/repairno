import { changestatus, deletedata } from "@/action/payment-shop-crud"
import Dropdownmenurepair from "@/components/admin/dropdownupdaterepair"
import Tabledata from "@/components/admin/tabledata"
import Tablefilter from "@/components/admin/tablefilter"
import Tabletitle from "@/components/admin/tablehead"
import Tablevariant from "@/components/admin/tablevariant"
import Searchfunction from "@/components/searchfunction"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import convertToMoney from "@/function/convert"
import supabase from "@/supabase/supabase"
import { Search } from "lucide-react"
import { SortAscIcon } from "lucide-react"
import { Filter } from "lucide-react"
import { Menu } from "lucide-react"
import moment from "moment"
import { sendError } from "next/dist/server/api-utils"

export default async function Page({ searchParams }) {
    const { sort, asc, search } = await searchParams
    const sortColumn = sort ?? "id";
    const currentsort = sortColumn === "date" ? "created_at" : "id"
    const ascending = asc === "false";    
    let alldata = supabase.from("payment_shop_history_view").select("*,item!inner(name)", { count: "exact" }).order(currentsort, { ascending: ascending })

    if (search && search.length >= 1) {
        alldata = alldata.or(`customer_name.ilike.%${search}%,item_name.ilike.%${search}%`); 
        console.log((await alldata).data )
        console.log((await alldata).error )
    }
    const {data,error,count} = await alldata
    console.log(error)
    return <div className="flex flex-col w-screen pr-15  gap-10" >
        <h1 className="text-6xl mt-8 ml-7 font-semibold capitalize" >Data penjualan</h1>
        <div className="flex flex-col gap-1"  >
            <div className="flex gap-3 items-center w-60 lg:w-100 ml-2 mb-3" >
                <Tablefilter ascparam={ascending} dateparam={sortColumn} />
                <Searchfunction />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <Tabletitle title={"id"} />
                        <Tabletitle title={"barang"} />
                        <Tabletitle title={"variant"} />
                        <Tabletitle title={"pembayaran"} />
                        <Tabletitle title={"jumlah"} />
                        <Tabletitle title={"nama"} />
                        <Tabletitle title={"nomer hp"} />
                        <Tabletitle title={"email"} />
                        <Tabletitle title={"status"} />
                        <Tabletitle title={"tanggal"} />
                        <Tabletitle title={"update"} />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map(e =>
                        <TableRow key={e.id} >
                            <Tabledata value={e.id} />
                            <Tabledata value={e.item?.name} />
                            <Tablevariant variantarray={e.variant_item} value={e.variant_item[0]} />
                            <Tabledata value={convertToMoney(e.total_money)} />
                            <Tabledata value={e.quantity} />
                            <Tabledata value={e.customer_name} />
                            <Tabledata value={e.phone} />
                            <Tabledata value={e.email} />
                            <Tabledata textcolor={e.status === "pending" ? "text-warning bg-warning/10 px-1.5 py-1 rounded-2xl w-min h-min" : "text-success bg-success/10 px-1.5 py-1 rounded-2xl w-min h-min "} value={e.status} />
                            <Tabledata value={moment(e.created_at).locale("ID").format("MMMM D yyyy")} />
                            <TableCell> <Dropdownmenurepair deletedescription={`tindakan ini akan data penjualan anda yakin ?.`} deletetitle={"hapus data ?"} deleteaction={deletedata} shopstatus={true} statusupdate={changestatus} id={e.id} /> </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    </div>
}