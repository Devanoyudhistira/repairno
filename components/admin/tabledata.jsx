import supabase from "@/supabase/supabase";
import { TableCell } from "../ui/table";
export default  function Tabledata({textcolor,value,shopitem,id}){
    return <TableCell > <h2 className={textcolor} >{value} </h2>  </TableCell>
}