import { changestatus } from "@/action/payment-shop-crud"
import Dropdownmenurepair from "@/components/admin/dropdownupdaterepair"
import Tabledata from "@/components/admin/tabledata"
import Tabletitle from "@/components/admin/tablehead"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import supabase from "@/supabase/supabase"
import { Menu } from "lucide-react"

export default async function Page() {
    const { data, error } = await supabase.from("payment-shop-history").select("*,item(name)").order("id",{ascending:true})    
    return <Table>
        <TableHeader>
            <TableRow>
                <Tabletitle title={"id"} />
                <Tabletitle title={"barang"} />
                <Tabletitle title={"nama"} />
                <Tabletitle title={"nomer hp"} />
                <Tabletitle title={"email"} />
                <Tabletitle title={"status"} />
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
                    <Tabledata textcolor={e.status === "pending" ? "text-warning" : "text-success"} value={e.status} />
                    <TableCell> <Dropdownmenurepair shopstatus={true} statusupdate={changestatus} id={e.id} /> </TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
}