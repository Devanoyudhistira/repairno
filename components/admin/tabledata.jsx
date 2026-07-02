
import supabase from "@/supabase/supabase";
import { TableCell } from "../ui/table";
export default  function Tabledata({textcolor,value,shopitem,id}){
    return <TableCell className={textcolor} > {value} </TableCell>
}