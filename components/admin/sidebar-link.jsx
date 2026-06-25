import Link from "next/link";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";

export default function Sidebarlink({ name, linktarget, Icon }) {
    return <SidebarMenuSubItem className={``} >
        <Link href={linktarget} > <SidebarMenuSubButton >  <Icon /> {name}  </SidebarMenuSubButton> </Link>
    </SidebarMenuSubItem>
}