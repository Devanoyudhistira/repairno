"use client"

import { signIn } from "@/action/auth"
import { useActionState } from "react"
import { Button } from "./ui/button"
import { Spinner } from "./ui/spinner"

export default function Formlogin() {
    const [state, loginaction, pending] = useActionState(signIn, null)
    return <form className="w-full flex i tems-center justify-center" action={loginaction} >
        <Button size="lg" variant={`${pending ? "outline" : "secondary"}`} disabled={pending} className={`bg-secondary h-15 w-full font-semibold text-white capitalize text-3xl`} >
          {pending ? <span className="flex items-center gap-2" >  <Spinner/> loading </span>: "login" }
        </Button>
    </form>
}