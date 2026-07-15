"use client"
import { Sidebar, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarTrigger } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronRight } from "lucide-react";
import { Plus } from "lucide-react";
import { History } from "lucide-react";
import { Button } from "../ui/button";
import { IceCream } from "lucide-react";
import Sidebarlink from "./sidebar-link";
import { ShoppingBag } from "lucide-react";
import { Clock } from "lucide-react";
import { LayoutDashboardIcon } from "lucide-react";
import Sidebargroupitem from "./sidebargroupitem";
import { WrenchIcon } from "lucide-react";
import { Hammer } from "lucide-react";
import { Building } from "lucide-react";
import Modetoggle from "../modetoggle";
import Link from "next/link";
import { Building2 } from "lucide-react";
import Image from "next/image";

export default function Sidebarnav({ userimage }) {
    return <Sidebar defaultopen={false} collapsible="icon"  >
        <div className="w-full flex items-center justify-between" >
            <SidebarTrigger />
            <span className="group-data-[collapsible=icon]:hidden text-xl capitalize font-semibold" >
                <Modetoggle />
            </span>
        </div>
        <span className="hidden group-data-[collapsible=icon]:block" >
            <Modetoggle />
        </span>
        <SidebarHeader className={`text-2xl flex flex-row gap-2 items-center font-bold`} >
            <SidebarMenu className={`flex flex-row gap-1 items-center`} >
                {!userimage ? <div className="p-1 text-xs w-max rounded-full bg-blue-400 dark:bg-blue-900 text-white flex items-center justify-center">
                    DY
                </div> :
                <Image className="object-cover object-center rounded-full w-8 h-8" src={userimage} alt="profile" width={100} height={100} />}
                <span className="group-data-[collapsible=icon]:hidden text-xl capitalize font-semibold">
                    Devano yudhistira
                </span>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarMenuItem className={"pl-4"} >
            <Link href={"/"} className="flex flex-row gap-2 items-center group-data-[collapsible=icon]:hidden" > <Building2 className="size-6" />  ke menu pelanggan </Link>
        </SidebarMenuItem>
        <Sidebargroupitem labelname={"shop admin section"} Icon={ShoppingCart} pagename={"shop function"} >
            <Sidebarlink Icon={Building} name={"shop main page"} linktarget={"/admin/shop"} />
            <Sidebarlink Icon={Plus} name={"buat dagangan"} linktarget={"/admin/shop/create"} />
            <Sidebarlink Icon={Clock} name={"lihat riwayat"} linktarget={"/admin/shop/history"} />
        </Sidebargroupitem>
        <Sidebargroupitem labelname={"repair admin section"} Icon={WrenchIcon} pagename={"repair function"} >
            <Sidebarlink Icon={Plus} name={"repair main page"} linktarget={"/admin/repair"} />
            <Sidebarlink Icon={Hammer} name={"buat project"} linktarget={"/admin/repair/create"} />
            <Sidebarlink Icon={Clock} name={"lihat riwayat perbaikan "} linktarget={"/admin/repair/history"} />
            <Sidebarlink Icon={LayoutDashboardIcon} name={"lihat data perbaikan"} linktarget={"/admin/repair/dashboard"} />
        </Sidebargroupitem>
    </Sidebar>
}