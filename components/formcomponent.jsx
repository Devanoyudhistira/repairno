"use client"


import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";
import { useActionState, useState } from "react";
import { Spinner } from "./ui/spinner";


export default function Formcomponent({ actionlogin }) {
    const [showpassword, setshowpassword] = useState(false)
    const [state, action, pending] = useActionState(actionlogin, null)    
    return (
        <form className="w-full px-23 flex flex-col items-center " action={action}  >
            <FieldGroup className={` p-0 w-screen h-80 text-left gap-2 px-3`} >
                <FieldLegend variant="primary" className={`text-left self-center w-max text-2xl`} > Login sebagai admin </FieldLegend>
                <FieldDescription className={`-mt-4 text-md text-center font-medium`} > Silahkan gunakan akun admin anda </FieldDescription>
                <Field className={`gap-1`} >
                    <FieldLabel className={`text-md font-semibold`} htmlFor="username" > Username </FieldLabel>
                    <Input name={`username`} className={`text-md`} id="username" type={"email"} placeholder="ketik usernama anda " />
                </Field>
                <Field className={`mt-2 gap-1 w-full`} >
                    <FieldLabel htmlFor="password" > Password </FieldLabel>
                    <div className="flex gap-1 items-center" >
                        <Input name={`password`} className={`py-2 w-full`} id="password" type={showpassword ? "text" : "password"} placeholder="ketik password anda " />
                        <Button type={`button`} size="icon" variant="outline" onClick={() => setshowpassword(!showpassword)} >
                            {showpassword ? <EyeClosed /> : <Eye />}
                        </Button>
                    </div>
                </Field>
                  <FieldError className={"text-md text-center"} errors={state?.error} > {state?.message} </FieldError>
                <Button disabled={pending} variant={!pending ? "default" : "outline"} className={`w-full mt-3 text-2xl font-semibold`} size="lg" >
                    {!pending ?  "Login" : <span className="flex items-center gap-1 " > <Spinner className={`size-6`} /> loading</span> }
                </Button>
            </FieldGroup>
        </form>
    )
}