"use client"

import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
    const { setTheme  } = useTheme()
    return (<nav className="w-full h-14 border-primary border-b-2 flex items-center justify-between px-3" >
        <h1 className="text-primary font-semibold text-xl" > Repair-no </h1>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                </DropdownMenuContent>
        </DropdownMenu>
    </nav>)
}