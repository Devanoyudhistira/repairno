import { changestatus } from "@/action/payment-shop-crud"
import Dropdownmenurepair from "@/components/admin/dropdownupdaterepair"
import Tabledata from "@/components/admin/tabledata"
import Tablefilter from "@/components/admin/tablefilter"
import Tabletitle from "@/components/admin/tablehead"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import supabase from "@/supabase/supabase"
import { Search } from "lucide-react"
import { SortAscIcon } from "lucide-react"
import { Filter } from "lucide-react"
import { Menu } from "lucide-react"
import moment from "moment"

export default async function Page({ searchParams }) {
    const { sort, asc } = await searchParams
    const sortColumn = sort ?? "id";
    const currentsort = sortColumn === "date" ? "created_at" : "id"
    const ascending = asc === "false";
    const { data, error } = await supabase.from("payment-shop-history").select("*,item(name)").order(currentsort, { ascending:ascending })

    return <div className="flex flex-col w-screen pr-15  gap-10" >
        <h1 className="text-6xl mt-8 font-semibold capitalize" >Data penjualan</h1>
        <div className="flex flex-col gap-1"  >
            <div className="flex gap-3 items-center w-100 ml-2 mb-3" >
                <Tablefilter ascparam={ascending} dateparam={sortColumn} />
                <InputGroup>
                    <InputGroupInput placeholder="search" />
                    <InputGroupAddon> <Search /> </InputGroupAddon>
                </InputGroup>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <Tabletitle title={"id"} />
                        <Tabletitle title={"barang"} />
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
                            <Tabledata value={e.item.name} />
                            <Tabledata value={e.customer_data.name} />
                            <Tabledata value={e.customer_data.phone_number} />
                            <Tabledata value={e.customer_data.email} />
                            <Tabledata textcolor={e.status === "pending" ? "text-warning bg-warning/10 px-1.5 py-1 rounded-2xl w-min h-min" : "text-success bg-success/10 px-1.5 py-1 rounded-2xl w-min h-min "} value={e.status} />
                            <Tabledata value={moment(e.created_at).locale("ID").format("MMMM D yyyy")} />
                            <TableCell> <Dropdownmenurepair shopstatus={true} statusupdate={changestatus} id={e.id} /> </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    </div>
}