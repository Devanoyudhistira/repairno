import { createuser } from "@/action/auth";
import Profileimageinput from "@/components/profile-image.-input";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldLegend } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import userid from "@/lib/userid";
import { createClient } from "@/supabase/server";
import { Chewy } from "next/font/google";
import { redirect } from "next/navigation";
const bubble = Chewy({weight:"400"})

export default async function Page() {
    const supabaseauth = await createClient()
    const {data} = await supabaseauth.auth.getSession()
    if(!data.session){
        redirect("/sign-up")
    }    
    if(await userid()){
        redirect("/shop")
    }
    return <main className="w-screen h-[95vh] overflow-hidden flex flex-col gap-5 items-center justify-end" >
        <h1 className={`text-secondary  ${bubble.className} -mt-8`} > <span className="text-6xl tracking-wider" > DevaCom </span> </h1>
        <form className="w-full flex flex-col rounded-t-3xl items-center mb-10 h-[75%] bg-accent-foreground justify-start px-3" action={createuser} >
            <Profileimageinput/>
            <FieldGroup className={`m-0 *:gap-1 *:text-accent *:px-5  p-0 gap-2 mt-5 items-center`} >
                <FieldLegend className={` font-semibold text-secondary `} > <span className="text-3xl" > Buat identitas anda </span> </FieldLegend>
                <Field className={`m-0`} >
                    <FieldLabel htmlFor="username" className={"text-secondary text-xl font-semibold"} > nama anda </FieldLabel>
                    <Input id="username" name="username" placeholder="nama anda" className={`border-secondary`} />
                </Field>                
                <Field className={``} >
                    <FieldLabel htmlFor="nomer-hp" className={"text-secondary text-xl font-semibold"} > nomor yang masih aktif </FieldLabel>
                    <Input id="nomer-hp" type={"number"} name="userphone" placeholder="nomor hp anda" className={`border-secondary`} />
                </Field>
            </FieldGroup>
            <Button size="lg" variant="secondary" className={`text-2xl w-full mt-4 p-2 h-15 font-semibold`} > buat akun anda </Button>
        </form>
    </main>
}