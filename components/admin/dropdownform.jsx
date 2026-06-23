"use state"

import { useActionState } from "react"
import { DropdownMenuItem } from "../ui/dropdown-menu"

export default function Dropdownform({statusupdate,color,status,text,iditem}) {
    const [state, statusaction, pending] = useActionState(statusupdate.bind(null, iditem, status), null)
    return <DropdownMenuItem className={`text-${color} focus:text-${color} focus:bg-${color}/90`} >
        <form action={statusaction} className="w-full h-full" > <button className="w-full h-full flex items-start justify-start" type="submit" > {text} </button>  </form>
    </DropdownMenuItem>
}