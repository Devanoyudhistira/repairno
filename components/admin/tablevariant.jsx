import supabase from "@/supabase/supabase";
import { TableCell } from "../ui/table";
export default async function Tablevariant({ textcolor, value, id, variantarray }) {
    const { data, error } = await supabase.from("variant").select("*").in("id", variantarray)
    console.log(data)
    console.log(error)
    return <TableCell >
        <ul>
           {data.map(e => 
        <li key={e.id} className={textcolor}  >
           {e.variant_category}: {e.name}
        </li>
           )} 
        </ul>
    </TableCell>
}