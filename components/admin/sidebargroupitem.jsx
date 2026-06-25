import { ChevronRight } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "../ui/sidebar";
import { ShoppingCart } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

export default function Sidebargroupitem({children,labelname,pagename,Icon}) {
    return <SidebarGroup>
        <SidebarGroupLabel> {labelname} </SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem>
                <Collapsible>
                    <CollapsibleTrigger asChild >
                        <SidebarMenuButton>
                            <Icon /> {pagename}
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub> {children} </SidebarMenuSub>
                    </CollapsibleContent>
                </Collapsible>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
}